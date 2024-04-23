import {colour_mix, largest_product, day_of_the_week, pay_raise, is_leap} from './functions.js';

function Question1(){
    return <section>
         let rgb_colour = "";
      <h2>results</h2>

      rgb_colour = colour_mix("red", "blue");
      <p>rgb_colour == "{'fuchsia'}"</p>

      rgb_colour = colour_mix("red", "green");
      <p>rgb_colour == "{'yellow'}"</p>

      rgb_colour = colour_mix("green", "blue");
      <p>rgb_colour == "{'aqua'}"</p>

      rgb_colour = colour_mix("red", "red");
      <p>rgb_colour == "{'red'}"</p>

      rgb_colour = colour_mix("blue", "blue");
      <p>rgb_colour == "{'blue'}"</p>

      rgb_colour = colour_mix("green", "green");
      <p>rgb_colour == "{'green'}"</p>
      
    </section>;
}

function Question2(){
    return <section>
         let product = 0;
      <h2>results</h2>

      product = largest_product(-8,12,20);
      <p>product == "{240}"</p>

      product = largest_product(26,24,25);
      <p>product == "{650}"</p>

      product = largest_product(442,875,342);
      <p>product == "{386750}"</p>
      
    </section>;
}

function Question3(){
    return <section>
         let day = "";
      <h2>results</h2>

      day = day_of_the_week(1);
      <p>day == "{'Sunday'}"</p>

      day = day_of_the_week(4);
      <p>day == "{'Wednesday'}"</p>

      day = day_of_the_week(6);
      <p>day == "{'Friday'}"</p>
      
    </section>;
}

function Question4(){
    return <section>
         let new_salary = 0;
      <h2>results</h2>
      new_salary = pay_raise('F', 12, 120000)
      <p>new_salary == "{126000}"</p>

      new_salary = pay_raise('F', 3, 80000)
      <p>new_salary == "{81200}"</p>

      new_salary = pay_raise('P',15,40000);
      <p>new_salary == "{41200}"</p>

      new_salary = pay_raise('P',2,20000);
      <p>new_salary == "{20200}"</p>

      new_salary = pay_raise('P', 5, 80000)
      <p>new_salary == "{81600}"</p>
      
    </section>;
}

function Question5(){
    return <section>
         let result = false;
      <h2>results</h2>

      result = is_leap(1753);
      <p>result == "{false}"</p>

      result = is_leap(1700);
      <p>result == "{false}"</p>

      result = is_leap(2004);
      <p>result == "{true}"</p>

      result = is_leap(1600);
      <p>result == "{true}"</p>
      
    </section>;
}

export {Question1, Question2, Question3, Question4, Question5}
/*
<p>rgb_colour = colour_mix("red", "blue") == ""</p>
      <p>rgb_colour == "{'fuchsia'}"</p>


OLD
<p>rgb_colour = colour_mix("red", "blue") == "{'fuchsia'}"</p>
      <p>rgb_colour = colour_mix("red", "green") == "{'yellow'}"</p>
      <p>rgb_colour = colour_mix("green", "blue") == "{'aqua'}"</p>
      <p>rgb_colour = colour_mix("red", "red") == "{'red'}"</p>
      <p>rgb_colour = colour_mix("blue", "blue") == "{'blue'}"</p>
      <p>rgb_colour = colour_mix("green", "green") == "{'green'}"</p>


function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

*/