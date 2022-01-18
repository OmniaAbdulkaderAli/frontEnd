
import { Quiz } from "./quiz.js";
export class start{
constructor(){
    this.questions;
    this.categItem=document.getElementById('category');
    this.amountItem =document.getElementById('Number');
    this.difficultyItem=document.getElementsByName('difficulty');
    this.startBtn=document.getElementById('startBtn');
    this.startBtn.addEventListener('click',this.startGuize.bind(this));
}

 async startGuize(){

    this.category= this.categItem.value;
    this.amount =this.amountItem.value;
    this.difficulty = Array.from(this.difficultyItem).filter(ele => ele.checked)[0].value;
  this.questions = await this.feachUrl(`https://opentdb.com/api.php?amount=${this.amount}&category=${this.category}&difficulty=${this.difficulty}`)
  
  if(this.questions.length > 0){
        $('#setting').fadeOut(300,()=>{$('#quiz').fadeIn(500)});
       new Quiz(this.questions)
        
    }
}

async feachUrl(url){

        let result = await fetch(url);
        result =  await result.json();
        return result.results

}

}


