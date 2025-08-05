import { Body, Controller, Delete, Get, Header, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Query, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto, UpdateCatDto } from './dto/cat.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}
    // ROUTING, GET HANDLER w/ REQUEST OBJ
    @Get()
    async findAll() {
        try {
            await this.catsService.findAll()
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Request is forbidden, contact someone.'
            }, HttpStatus.FORBIDDEN, {
                cause: error
            });
        }
    }
    // findall(@Query('age') age: number, @Query('breed') breed: string) { // using query params
    //     return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
    // }

    // ROUTE WILDCARDS
    @Get('abcd/*')
    findAllWC() {
        return 'This route uses a wildcard';
    }

    // REDIRECTION
    @Get()
    @Redirect('https://nestjs.com/', 301)

    @Get()
    @Redirect('https://docs.nestjs.com/', 302)
    getDocs(@Query('version') version) {
        if (version && version === '5') {
            return {url: 'https://docs.nestjs.com/v5/'}
        }
    }

    // ROUTE PARAMS
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        console.log('id:', id);
        return `This action return a #${this.catsService.findOne(id)} cat`;
    }

    // POST HANDLER
    @Post()
    async create(@Body() createCatDto: CreateCatDto) { // using async and req payloads
        return 'This action adds a new cat';
    }

    // STATUS CODE
    // the default status code for response is 200,
    // except for POST Requests,
    // which defaults to 201 (we can chhange this)
    @Post()
    @HttpCode(204)
    createWithCustomReq() {
        return 'This action adds';
    }

    // RESPONSE HEADER
    @Post()
    @Header('Cache-Control', 'no-store')
    createWithCustomHeader() {
        return 'This action adds a new cat with request response header';
    }

    // Other crud controller methods
    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return `This action deletes a #${id} cat`;
    }
}
