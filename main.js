document.getElementById("calculate-btn").addEventListener("click", function(){
    // console.log("click")
   const income= document.getElementById("income");
   const incomeValue= income.value;
   const incomeValueFloat= parseFloat(incomeValue);
   console.log(incomeValueFloat)



   const food= document.getElementById("food");
   const foodValue= food.value;
   const foodValueFloat= parseFloat(foodValue);

console.log(foodValueFloat)



const rent= document.getElementById("rent");
   const rentValue= rent.value;
   const rentValueFloat= parseFloat(rentValue);

console.log(rentValueFloat)



const clothes= document.getElementById("clothes");
   const clothesValue= clothes.value;
   const clothesValueFloat= parseFloat(clothesValue);

console.log(clothesValueFloat)


// const others= document.getElementById("others");
//    const othersValue= others.value;
//    const othersValueFloat= parseFloat(othersValue);

// console.log(othersValueFloat)



const totalCost=foodValueFloat+ rentValueFloat +  clothesValueFloat;

const totalExpense= document.getElementById("total-expense");

const setValue=  totalExpense.innerText= totalCost;



const totalBalance= incomeValueFloat - totalCost;



const balance= document.getElementById("balance");

const balanceSet= balance.innerText= totalBalance;


})