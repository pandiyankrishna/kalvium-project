let question=[
    {
        no:1,
        ques:"In the animation film “Finding Nemo,” the main protagonist is a pufferfish",
        ans: "False",
        options: [
            "True",
            "False"
          ]
    },
    {
        no:2,
        ques:"Is Mount Kilimanjaro the world’s tallest peak? ",
        ans: "False",
        options: [
            "True",
            "False"
          ]
    },
    {
        no:3,
        ques:"Venezuela is home to the world’s highest waterfall. ",
        ans: "True",
        options: [
            "True",
            "False"
          ]
    },
    {
        no:4,
        ques:"The capital of Australia is Sydney",
        ans: "False",
        options: [
            "True",
            "False"
          ]
    },
    {
        no:5,
        ques:"The longest river in the world is the Amazon River",
        ans: "False",
        options: [
            "True",
            "False"
          ]
    },
    {
        no:6,
        ques:"In Scotland, the unicorn is their national animal ",
        ans: "True",
        options: [
            "True",
            "False"
          ]
    },
    {
        no:7,
        ques:"There is no English word that rhymes with orange",
        ans: "True",
        options: [
            "True",
            "False"
          ]
    },
    {
        no:8,
        ques:"Nepal is the only country in the world without a rectangular flag ",
        ans: "True",
        options: [
            "True",
            "False"
          ]
    },
    {
        no:9,
        ques:"In the famous movie Harry Potter, Draco Malfoy doesn’t have a sibling ",
        ans: "False",
        options: [
            "True",
            "False"
          ]
    },
    {
        no:10,
        ques:"The Atlantic Ocean is the world’s biggest ocean ",
        ans: "False",
        options: [
            "True",
            "False"
          ]
    }

];

quiz1=document.querySelector('.quiz1');
main_box=document.querySelector('.questions');
option_list=document.querySelector('.option_list');

quiz1.onclick= ()=>{

    main_box.style.display="inherit";
   showquestion(0);
    
}

nextbtn=document.querySelector('.next');
let ques_count=0;

nextbtn.onclick= ()=> agla();

function agla(){

    comment.style.display="none";

    if(ques_count<question.length-1)
    {
        ques_count++;
        showquestion(ques_count);
    }
    else{
        showresult();
    }

}

prevbtn=document.querySelector('.previous');

prevbtn.onclick=()=>{

    comment.style.display="none";

    if(ques_count>0)
    {
        ques_count--;
        showquestion(ques_count);
    }
}


function showquestion(index)
{
   ques_text=document.querySelector('.que_text');

   //creating a new span and div tag for question and option and passing the value using array index
   
   let que_tag = '<span>'+ question[index].no + ". " + question[index].ques +'</span>';
   let option_tag = '<div class="optionTF"><button>'+ question[index].options[0] +'</button></div>'+'<br>'
   + '<div class="optionTF"><button>'+ question[index].options[1] +'</button></div>';
   ques_text.innerHTML = que_tag;                                           //adding new span tag inside que_tag
   option_list.innerHTML = option_tag;                                      //adding new div tag inside option_tag
   
   const option = option_list.querySelectorAll(".optionTF");
// set onclick attribute to all available options
   for(i=0; i < option.length; i++){
       option[i].setAttribute("onclick", "optionSelected(this)");
   }
}

let userScore=0;
let comment=document.querySelector('.comment');

function optionSelected(ans){

    let userAns = ans.textContent;                                   //getting user selected option
    let correcAns = question[ques_count].ans;                        //getting correct answer from array
    const allOptions = option_list.children.length;                  //getting all option items
    
    if(userAns == correcAns){                                        //if user selected option is equal to array's correct answer
        userScore += 1;                                              //upgrading score value with 1

        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
        comment.innerHTML="<span> Correct Answer </span>"
        comment.style.display="inherit";
    }
    else{
        console.log("Wrong Answer");
        comment.innerHTML="<span> Wrong Answer </span>"
        comment.style.display="inherit";
    }

    setTimeout(agla, 1000);
}

let resultbox=document.querySelector('.result');
let score=document.querySelector('.score');

function showresult(){
resultbox.style.display="inherit";
main_box.style.display="none";

score.innerHTML='<span> Your Score is <span>'+userScore+'  out of '+question.length;
}

let replay=document.querySelector('.replay');
let exit=document.querySelector('.exit');

replay.onclick= ()=>{
    main_box.style.display="inherit";
    resultbox.style.display="none";
    showquestion(0);
    ques_count=0;
    userScore=0;
}

exit.onclick= ()=>{
    resultbox.style.display="none";
    ques_count=0;
    userScore=0;
}




