(function() {
  const myQuestions = [
    {
      question: "晚上沒使用保養品﹐<br/> 早上起床時感覺皮膚狀況如何？",
      answers: {
        a: "有緊繃感",
        b: "無緊繃感",
        c: "T字部有點油膩感",
        d: "全臉都有點油膩感"
      },
      correctAnswer: "c"
    },
    {
      question: "晚上沒使用保養品﹐<br/>早上起床皮膚觸摸的狀況如何？",
      answers: {
        a: "有細碎脫屑",
        b: "光滑無脫屑",
        c: "T字部油油的",
        d: "全臉都油油的"
      },
      correctAnswer: "c"
    },
    {
      question: "<br/>臉部肌膚最常出現的問題？",
      answers: {
        a: "乾燥脫皮",
        b: "大致上沒問題",
        c: "T字部位毛孔粗大",
        d: "易長痘痘粉刺"
      },
      correctAnswer: "d"
    },
    {
      question: "<br/>最容易長痘痘的部位？",
      answers: {
        a: "不太常長",
        b: "兩頰",
        c: "T字部位",
        d: "全臉"
      },
      correctAnswer: "d"
    },
    {
      question: "<br/>臉部毛孔最容易粗大的地方？",
      answers: {
        a: "沒有",
        b: "T字部位",
        c: "T字部位及臉頰"
      },
      correctAnswer: "d"
    },
    {
      question: "臉部肌膚最容易覺得乾燥的部位？",
      answers: {
        a: "全臉",
        b: "臉頰",
        c: "無特別乾燥部位"
      },
      correctAnswer: "d"
    },
    {
      question: "肌膚最常因氣候變化而受到的影響？",
      answers: {
        a: "冬天特別容易乾燥",
        b: "無明顯變化",
        c: "夏天特別容易出油"
      },
      correctAnswer: "d"
    }
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label class="RContainer">
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${currentQuestion.answers[letter]}
              <span class="radiomark"></span>
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;
    let ansSum = 0;
    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === "a") {
        // add to the number of correct answers
        ansSum += 1;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      }else if (userAnswer === "b") {
        ansSum += 2;
      }else if (userAnswer === "c") {
        ansSum += 3;
      }else if (userAnswer === "d") {
        ansSum += 4;
      }

    });

    if (ansSum <= 10){
      ans1 = 1;
    }else if(ansSum <=14){
      ans1 = 2;
    }else if(ansSum <= 20){
      ans1 = 3;
    }else if(ansSum >= 21){
      ans1 = 4;
    }
    slides[currentSlide].classList.remove("active-slide");
    midContainer.style.opacity=1;
    // show number of correct answers out of total
    previousButton.style.display = "none";
    submitButton.style.display = "none";
    nextQuizButton.style.display = "inline-block";

  }

  function showSlide(n) {
    startButton.style.display="none";
    nextButton.style.display = "inline-block";

    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }


  const myQuestions2 = [
    {
      question: "以下敘述若符合你的情況，<br/>請在旁邊打勾(若無症狀可跳過)",
      answers: {
        a: "流汗後肌膚會癢、刺痛",
        b: "一曬到紫外線，肌膚就會發紅、刺痛",
        c: "多數防曬產品擦了肌膚會發癢、刺痛",
        d: "洗臉後肌膚會緊繃，發紅",
        e: "按摩或敷面膜，就會覺得刺激"
      },
      correctAnswer: "c"
    },
    {
      question: "以下敘述若符合你的情況，<br/>請在旁邊打勾(若無症狀可跳過)",
      answers: {
        a: "抹了高保濕美容液，肌膚會癢、刺痛",
        b: "抹了化妝水，肌膚常有刺痛感",
        c: "用了眼線、眼影等的眼彩彩妝品，容易發炎起疹",
        d: "一使用新化妝品，皮膚就會出現問題",
        e: "過去1~2年內曾因使用化妝品而導致肌膚發炎、出疹"
      },
      correctAnswer: "c"
    },
    {
      question: "以下敘述若符合你的情況，<br/>請在旁邊打勾(若無症狀可跳過)",
      answers: {
        a: "肌膚總是很粗糙，常脫皮",
        b: "臉上常因壓力或疲勞就長粉刺、痘痘等",
        c: "生理期前或生理期間，總會出現肌膚問題",
        d: "每當季節變換時，肌膚狀況就會不安定",
        e: "肌膚很脆弱，平常就容易長濕疹"
      },
      correctAnswer: "d"
    },
    {
      question: "以下敘述若符合你的情況，<br/>請在旁邊打勾(若無症狀可跳過)",
      answers: {
        a: "患有花粉症",
        b: "對尼龍、橡膠、化學纖維等物質過敏",
        c: "屬於特異反應體質或本身為皮膚炎患者",
        d: "曾因肌膚過敏問題而去過皮膚科就診"
      },
      correctAnswer: "d"
    }
  ];

  function buildQuiz2() {
    // we'll need a place to store the HTML output
    const output = [];
    // for each question...
    myQuestions2.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label class="CContainer">
             <input type="checkbox" class="ans2Checkbox" name="question${questionNumber}" value="${letter}">
              ${currentQuestion.answers[letter]}
              <span class="checkmark"></span>
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide2"">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers2"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer2.innerHTML = output.join("");
  }

  function showResults2() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer2.querySelectorAll(".answers2");

    // keep track of user's answers
    let numCorrect = 0;
    let ansSum = 0;
    // for each question...
    myQuestions2.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber].querySelectorAll(".ans2Checkbox");
      //console.log(answerContainers);
      answerContainer.forEach((currentAnswer)=>{
        if (currentAnswer.checked == true){

          ansSum++;
        }
      });

    });

    if (ansSum <= 3){
      ans2 = 1;
    }else if(ansSum <=7){
      ans2 = 2;
    }else if(ansSum <= 13){
      ans2 = 3;
    }else if(ansSum >= 14){
      ans2 = 4;
    }
    slides2[currentSlide2].classList.remove("active-slide");
    removeSlide();
    resultContainer.style.opacity=1;
    // show number of correct answers out of total
    previousButton2.style.display = "none";
    submitButton2.style.display = "none";
    continueButton.style.display = "inline-block";
    //nextQuizButton.style.display = "inline-block";
    showFinalResult();
  }

  function showSlide2(n) {
    nextQuizButton.style.display = "none";
    submitButton.style.display = "none";
    slides2[currentSlide2].classList.remove("active-slide");
    slides2[n].classList.add("active-slide");
    currentSlide2 = n;

    if (currentSlide2 === 0) {
      previousButton2.style.display = "none";
    } else {
      previousButton2.style.display = "inline-block";
    }

    if (currentSlide2 === slides2.length - 1) {
      nextButton2.style.display = "none";
      submitButton2.style.display = "inline-block";
    } else {
      nextButton2.style.display = "inline-block";
      submitButton2.style.display = "none";
    }
  }

  function showNextSlide2() {
    showSlide2(currentSlide2 + 1);
  }

  function showPreviousSlide2() {
    showSlide2(currentSlide2 - 1);
  }



  function showFinalResult(){
    resultTitleContainer.innerHTML = "測驗結果";
    if((ans1 == 1) && (ans2 == 1)){
      resultContainer.innerHTML = "乾性一般膚質";
      resultDetailContainer.innerHTML = "恭喜妳！</br>妳的皮膚屬於健康的乾性膚質，</br>幾乎沒有敏感症狀。</br>平時可以多注意補充肌膚的水份</br>與營養、進行油水平衡的護理。</br></br></br>讓我們來看看更詳細的保養建議與推薦產品吧！"
      finalResult = 1;
    }else if((ans1 == 1) && (ans2 == 2)){
      resultContainer.innerHTML = "乾性輕微敏感膚質";
      resultDetailContainer.innerHTML ="妳的皮膚大致健康，</br>但有輕微的敏感症狀，</br>平時除了多注意補充肌膚的水份</br>與營養、進行油水平衡的護理，</br>還應該同時注意保養品的成分，</br>減少使用含有易致敏成分的產品喔！</br></br>讓我們來看看更詳細的保養建議與推薦產品吧！";
      finalResult = 1;
    }else if((ans1 == 2) && (ans2 == 1)){
      resultContainer.innerHTML = "中性一般膚質";
      resultDetailContainer.innerHTML ="恭喜妳！</br>妳的皮膚屬於健康的中性膚質，</br>平時隨季節變化適量為皮膚補油補水即可。</br></br>讓我們來看看更詳細的保養建議與推薦產品吧！";
      finalResult = 2;
    }else if((ans1 == 2) && (ans2 == 2)){
      resultContainer.innerHTML = "中性輕微敏感膚質";
      resultDetailContainer.innerHTML ="妳的皮膚大致健康，</br>但有輕微的敏感症狀，</br>平時除了隨季節變化適量為皮膚補油補水，</br>還應該同時注意保養品的成分，</br>減少使用含有易致敏成分的產品喔！</br></br>讓我們來看看更詳細的保養建議與推薦產品吧！";
      finalResult = 2;
    }else if((ans1 == 3) && (ans2 == 1)){
      resultContainer.innerHTML = "混合性一般膚質";
      resultDetailContainer.innerHTML ="恭喜妳！</br>妳的皮膚屬於健康的混合性膚質，</br>幾乎沒有敏感症狀。</br>平時應將T字出油部位以及兩頰乾性部位分區保養，</br>並隨季節變化適時更換合適的保養品。</br></br>讓我們來看看更詳細的保養建議與推薦產品吧！";
      finalResult = 3;
    }else if((ans1 == 3) && (ans2 == 2)){
      resultContainer.innerHTML = "混合性輕微敏感膚質";
      resultDetailContainer.innerHTML ="妳的皮膚大致健康，</br>但有輕微的敏感症狀。</br>平時應將T字出油部位以及兩頰乾性部位分區保養，</br>並隨季節變化適時更換合適的保養品。</br>除此之外還應該同時注意保養品的成分，</br>減少使用含有易致敏成分的產品喔！</br></br>讓我們來看看更詳細的保養建議與推薦產品吧！";
      finalResult = 3;
    }else if((ans1 == 4) && (ans2 == 1)){
      resultContainer.innerHTML = "油性一般膚質";
      resultDetailContainer.innerHTML ="恭喜妳！</br>妳的皮膚屬於健康的油性膚質，</br>幾乎沒有敏感症狀。</br>平時應注重保濕補水，</br>並避免使用含油量過高的產品。</br></br>讓我們來看看更詳細的保養建議與推薦產品吧！";
      finalResult = 4;
    }else if((ans1 == 4) && (ans2 == 2)){
      resultContainer.innerHTML = "油性輕微敏感膚質";
      resultDetailContainer.innerHTML ="妳的皮膚大致健康，但有輕微的敏感症狀。平時應注重保濕補水，並避免使用含油量過高的產品。除此之外還應該同時注意減少使用含有易致敏成分的產品喔！讓我們來看看更詳細的保養建議與推薦產品吧！";
      finalResult = 4;
    }else if(ans2 == 3){
      resultContainer.innerHTML = "中度敏感膚質";
      resultDetailContainer.innerHTML ="妳的膚質現在處於敏感狀態，</br>應格外注意避免使用含有易致敏成分的產品。</br>不過不用緊張</br>讓我們來看看更詳細的保養建議與推薦產品吧！";
      finalResult = 5;
    }else if(ans2 == 4){
      resultContainer.innerHTML = "極度敏感膚質";
      resultDetailContainer.innerHTML ="噢喔！</br>妳的膚質現在非常敏感，</br>應格外注意避免使用含有易致敏成分的產品，</br>並建議妳同時尋求專業皮膚科醫師的協助，</br>以改善膚質狀況喔！</br></br>讓我們來看看更詳細的保養建議與推薦產品吧！";
      finalResult = 5;
    }
    localStorage.setItem("finalResult",finalResult);
  }

  function activeShowSlide(){
    introContainer.style.display="none";
    showSlide(0);
  }
  function activeShowSlide2(){
    midContainer.style.display="none";
    showSlide2(0);
  }
  function removeSlide() {
    var elem = document.getElementById("quiz");
    elem.parentNode.removeChild(elem);
    elem = document.getElementById("quiz2");
    elem.parentNode.removeChild(elem);
}

  const quizContainer = document.getElementById("quiz");
  const quizContainer2 = document.getElementById("quiz2");
  const startButton = document.getElementById("startQuiz");
  const submitButton = document.getElementById("submit");
  const submitButton2 = document.getElementById("submit2");
  const continueButton = document.getElementById("continue");
  const introContainer = document.getElementById("quizIntro");
  const midContainer = document.getElementById("mid");
  const resultTitleContainer = document.getElementById("resultTitle");
  const resultContainer = document.getElementById("result");
  const resultDetailContainer = document.getElementById("resultDetail");

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const previousButton2 = document.getElementById("previous2");
  const nextButton2 = document.getElementById("next2");
  const nextQuizButton = document.getElementById("nextQuiz");
  let currentSlide = 0;
  let currentSlide2 = 0;
  let ans1 = 0;
  let ans2 = 0;
  let finalResult = 0;
  // display quiz right away
  buildQuiz();
  buildQuiz2();
  const slides = document.querySelectorAll(".slide");
  const slides2 = document.querySelectorAll(".slide2");



  // on submit, show results

  submitButton.addEventListener("click", showResults);
  submitButton2.addEventListener("click", showResults2);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
  previousButton2.addEventListener("click", showPreviousSlide2);
  nextButton2.addEventListener("click", showNextSlide2);
  nextQuizButton.addEventListener("click", activeShowSlide2);
  startButton.addEventListener("click", activeShowSlide);

  previousButton.style.display = "none";
  previousButton2.style.display = "none";
  nextButton.style.display = "none";
  nextButton2.style.display = "none";
  nextQuizButton.style.display = "none";
  submitButton.style.display = "none";
  submitButton2.style.display = "none";
  continueButton.style.display = "none";
/*  submitButton.style.display = "none";
  submitButton2.style.display = "none";
  previousButton.style.display = "none";
  previousButton2.style.display = "none";
  nextButton.style.display = "none";
  nextButton2.style.display = "none";
  nextQuizButton.style.display = "none";*/
})();
