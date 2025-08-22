using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace cs_001_first
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // ---- STRINGS ----
            string greetings = "Hello, world!";
            Console.WriteLine(greetings);

            // ---- Types of numbers ----
            // 1. integers
            int age = 39;
            Console.WriteLine(age);
            Console.WriteLine(int.MaxValue);
            Console.WriteLine(int.MinValue);

            // 2. long integers
            Console.WriteLine(long.MaxValue);
            Console.WriteLine(long.MinValue);

            long big_number = 900000000L;
            Console.WriteLine(big_number);

            // 3.a. decimals with 'double'
            double negative = -55.2D;
            Console.WriteLine(negative);
            Console.WriteLine(double.MaxValue);
            Console.WriteLine(double.MinValue);

            // 3.b. decimals with 'float'
            float precision = 5.000001F;
            Console.WriteLine(precision);
            Console.WriteLine(float.MaxValue);
            Console.WriteLine(float.MinValue);

            // 3.c. decimals with 'decimal'
            decimal money = 15.99M;
            Console.WriteLine(money);
            Console.WriteLine(decimal.MaxValue);
            Console.WriteLine(decimal.MinValue);

            // strings and characters
            string name = " John";
            char name_initial = 'a';
            Console.Write("You are ");
            Console.Write(name_initial);
            Console.WriteLine(name);

            // -- converting string to number
            string text_age = "23";
            int num_age = Convert.ToInt32(text_age);
            Console.WriteLine(num_age);

            string text_big_num = "900000000";
            long num_big_num = Convert.ToInt64(text_big_num);
            Console.WriteLine(num_big_num);

            string text_negative = "-55.2";
            double num_negative = Convert.ToDouble(text_negative);
            Console.WriteLine(num_negative);

            string text_precision = "5.000001";
            float num_precision = Convert.ToSingle(text_precision);
            Console.WriteLine(num_precision);

            string text_money = "100.99";
            decimal num_money = Convert.ToDecimal(text_money);
            Console.WriteLine(num_money);

            // ---- BOOLEAN ----
            bool value = true;
            if (value)
            {
                Console.WriteLine("return true..."); 
            }

            Console.ReadLine();
        }
    }
}
