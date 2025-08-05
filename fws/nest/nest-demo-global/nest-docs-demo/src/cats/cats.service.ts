import { Injectable } from '@nestjs/common';
import { Cat } from './interface/cats.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findOne(id): Cat {
        return this.findOne(id);
    }

    findAll(): Cat[] {
        return this.cats;
    }
}
