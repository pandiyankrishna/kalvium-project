let array=[
    {
        no:1,
        ques:"‘Art of Life’ methodology, which was seen in news recently, is associated with which state?",
        ans: "C. Rajasthan",
        options: [
            "A. Odisha",
            "B. Gujarat",
            "C. Rajasthan",
            "D. Punjab"
          ]
    },
    {
        no:2,
        ques:"Exercise Yogdan is associated with which category of association?",
        ans: "B. National Cadet Corps",
        options: [
            "A. Red Cross",
            "B. National Cadet Corps",
            "C. Indian Space Research Organisation",
            "D. Intelligence Bureau"
          ]
    },
    {
        no:3,
        ques:"What is the name of the application launched by the Ministry of Earth Sciences, for ocean data management?",
        ans: "B. Digital Ocean",
        options: [
            "A. Digi Earth",
            "B. Digital Ocean",
            "C. Bharat Ocean",
            "D. Samudra Digital"
          ]
    },
    {
        no:4,
        ques:"Which of the following is a trans-Himalayan river?",
        ans: "C. Sutlej",
        options: [
            "A. Ganga",
            "B. Yamuna",
            "C. Sutlej",
            "D. Ravi"
          ]
    },
    {
        no:5,
        ques:"Who was known as Iron man of India?",
        ans: "D. Sardar Vallabhbhai Patel",
        options: [
            "A. Govind Ballabh Pant",
            "B. Jawaharlal Nehru",
            "C. Subhash Chandra Bose",
            "D. Sardar Vallabhbhai Patel"
          ]
    },
    {
        no:6,
        ques:"The tree sends down roots from its branches to the soil is know as:",
        ans: "C. Banyan",
        options: [
            "A. Oak",
            "B. Pine",
            "C. Banyan",
            "D. Palm"
          ]
    },
    {
        no:7,
        ques:"The birthday of which of the leader in India is observed as Children's day?",
        ans: "D. Jawaharlal Nehru",
        options: [
            "A. Mahatma Gandhi",
            "B. S.Radhakrishnan",
            "C. Rajiv Gandhi",
            "D. Jawaharlal Nehru"
          ]
    }
];


quiz2=document.querySelector('.quiz2');
main_box2=document.querySelector('.mcq');
option_list2=document.querySelector('.options_list');
nextbtn2=document.querySelector('.next2');
prevbtn2=document.querySelector('.previous2');
let comment2=document.querySelector('.comment2');
let resultbox2=document.querySelector('.result2');
let score2=document.querySelector('.score2');
let replay2=document.querySelector('.replay2');
let exit2=document.querySelector('.exit2');

quiz2.onclick= ()=>{

    main_box2.style.display="inherit";
   show(0);
    
}

let ques_cnt=0;

nextbtn2.onclick= ()=> aglaa();

function aglaa(){

    comment2.style.display="none";

    if(ques_cnt<array.length-1)
    {
        ques_cnt++;
        show(ques_cnt);
    }
    else{
        showres();
    }

}


prevbtn2.onclick=()=>{

    comment2.style.display="none";

    if(ques_cnt>0)
    {
        ques_cnt--;
        show(ques_cnt);
    }
}


function show(index)
{
   ques_text2=document.querySelector('.mcqtext');

   //creating a new span and div tag for question and option and passing the value using array index
   let que_tag2 = '<span>'+ array[index].no + ". " + array[index].ques +'</span>';
   let option_tag2 = '<div class="optionTF"><button>'+ array[index].options[0] +'</button></div>'+'<br>'
   + '<div class="optionTF"><button>'+ array[index].options[1] +'</button></div><br><div class="optionTF"><button>'+array[index].options[2]+'</button></div><br><div class="optionTF"><button>'+array[index].options[3]+'</button></div>';
   ques_text2.innerHTML = que_tag2;                        //adding new span tag inside que_tag
   option_list2.innerHTML = option_tag2;                  //adding new div tag inside option_tag
   
   const option = option_list2.querySelectorAll(".optionTF");
   // set onclick attribute to all available options
   for(i=0; i < option.length; i++){
       option[i].setAttribute("onclick", "Selected(this)");
   }
}

let useScore=0;

function Selected(ans){

    let userAns = ans.textContent;                       //getting user selected option
    let correcAns = array[ques_cnt].ans;                 //getting correct answer from array
    const allOptions = option_list2.children.length;    //getting all option items
    
    if(userAns == correcAns){                               //if user selected option is equal to array's correct answer
        useScore += 1;                                      //upgrading score value with 1

        console.log("Correct Answer");
        console.log("Your correct answers = " + useScore);
        comment2.innerHTML="<span> Correct Answer </span>"
        comment2.style.display="inherit";
    }
    else{
        console.log("Wrong Answer");
        comment2.innerHTML='<div>Wrong Answer </div>'+'<div> <br>   Correct Answer is: '+ correcAns;
        comment2.style.display="inherit";
    }

    setTimeout(aglaa, 2000);
    
}

function showres(){
resultbox2.style.display="inherit";
main_box2.style.display="none";

score2.innerHTML='<span> Your Score is <span>'+useScore+'  out of '+array.length;
}


replay2.onclick= ()=>{
    main_box2.style.display="inherit";
    resultbox2.style.display="none";
    show(0);
    ques_cnt=0;
    useScore=0;
}

exit2.onclick= ()=>{
    resultbox2.style.display="none";
    ques_cnt=0;
    useScore=0;
}

