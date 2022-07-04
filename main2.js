player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;
player1_score = 0;
player2_score = 0;
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question Turn: " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2_name;

function send(){
    number_1 = document.getElementById("input1").value;
    number_2 = document.getElementById("input2").value;
    answer = number_1*number_2;

    q = "<h4>" + number_1 + "X" + number_2 + "</h4>";
    i = "<input type='number' placeholder='Type your answer here!' id='INPUT'>";
    c = "<button class='btn btn-primary'> Check </button>";
    row = q + i + c;
    document.getElementById("output").innerHTML = row;
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
}

question_turn = "player_1";
answer_turn = "player_2";

function check(){
    get_answer = document.getElementById("input_checkbox").value;
    get_answer2 = get_answer.toLowerCase();
    
    if(get_answer2 == w1){
        if(answer_turn == "player_1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(question_turn == "player_1"){
        question_turn = "player_2"
        document.getElementById("player_question").innerHTML = "Question Turn: " + player2_name;
    }
    else{
        question_turn = "player_1"
        document.getElementById("player_question").innerHTML = "Question Turn: " + player1_name;
    }
    if(answer_turn == "player_1"){
        answer_turn = "player_2"
        document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2_name;
    }
    else{
        answer_turn = "player_1"
        document.getElementById("player_answer").innerHTML = "Answer Turn: " + player1_name;
    }

    document.getElementById("output").innerHTML = ""; 
}