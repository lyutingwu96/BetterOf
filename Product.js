(function() {
  let skinType = 0;
window.onload = function(){
  skinType = localStorage.getItem("finalResult");
  console.log(skinType);
  if(skinType==1){
    cNameContainer.innerHTML="保養品推薦：乾性肌";
    p1Container.innerHTML="Avene 雅漾舒護活泉水：</br>質地清爽，能在日曬、清潔後，讓肌膚保</br>持水嫩，並且不易乾燥，一般及嬌嫩的肌</br>膚都適用！";
    p2Container.innerHTML="理膚寶水 多容安濕潤乳液：</br>針對亞洲膚質開發的乳液，含角鯊烷等成</br>分，能有效保濕、修護肌膚並效舒緩敏感</br>狀況。" ;
    p3Container.innerHTML="DR.WU達爾膚 角鯊潤澤修復精華：</br>包含橄欖油提煉的角鯊烷，讓產品潤澤卻</br>輕盈，加強保濕並協助修護肌膚。";
  }else if(skinType==2){
    cNameContainer.innerHTML="保養品推薦：中性肌";
    p1Container.innerHTML="肌研 極潤健康化粧水：</br>嚴選多重植物精華，不僅修護肌膚，還能</br>舒緩不安定狀況，讓肌膚回復健康狀態。";
    p2Container.innerHTML="SOFINA 透美顏飽水控油雙效水凝乳液：</br>嚴選植物來源成分，滋潤乾燥而脆弱的角</br>質層，讓肌膚維持長時間的水潤。";
    p3Container.innerHTML="蜜濃 水潤保濕修護面膜：</br>日本暢銷面膜，能為角質層加強補水，並</br>撫平細紋。";
  }else if(skinType==3){
    cNameContainer.innerHTML="保養品推薦：混合肌";
    p1Container.innerHTML="肌研 極潤健康化粧水：</br>嚴選多重植物精華，不僅修護肌膚，還能</br>舒緩不安定狀況，讓肌膚回復健康狀態。";
    p2Container.innerHTML="理膚寶水 多容安濕潤乳液：</br>針對亞洲膚質開發的乳液，含角鯊烷等成</br>分，能有效保濕、修護肌膚並效舒緩敏感</br>狀況。";
    p3Container.innerHTML="蘭芝 睡美人香氛水凝膜：</br>針對夜間睡眠時段，以溫和配方，協助淨</br>化肌膚、有效鎖水，並紓緩日間壓力造成</br>的泛紅敏感。";
  }else if(skinType==4){
    cNameContainer.innerHTML="保養品推薦：油性肌";
    p1Container.innerHTML="Avene 雅漾舒護活泉水：</br>質地清爽，能在日曬、清潔後，讓肌膚保</br>持水嫩，並且不易乾燥，一般及嬌嫩的肌</br>膚都適用！";
    p2Container.innerHTML="SOFINA 透美顏飽水控油雙效水凝乳液：</br>嚴選植物來源成分，滋潤乾燥而脆弱的角</br>質層，讓肌膚維持長時間的水潤。";
    p3Container.innerHTML="蜜濃 水潤保濕修護面膜：</br>日本暢銷面膜，能為角質層加強補水，並</br>撫平細紋。";
  }else if(skinType==5){
    cNameContainer.innerHTML="保養品推薦：敏感肌";
    p1Container.innerHTML="Avene 雅漾舒護活泉水：</br>質地清爽，能在日曬、清潔後，讓肌膚保</br>持水嫩，並且不易乾燥，一般及嬌嫩的肌</br>膚都適用！";
    p2Container.innerHTML="理膚寶水 多容安濕潤乳液：</br>針對亞洲膚質開發的乳液，含角鯊烷等成</br>分，能有效保濕、修護肌膚並效舒緩敏感</br>狀況。";
    p3Container.innerHTML="蘭芝 睡美人香氛水凝膜：</br>針對夜間睡眠時段，以溫和配方，協助淨</br>化肌膚、有效鎖水，並紓緩日間壓力造成</br>的泛紅敏感。";
  }
}




const cNameContainer = document.getElementById("CName");
const p1Container = document.getElementById("p1");
const p2Container = document.getElementById("p2");
const p3Container = document.getElementById("p3");
  })();
