(function() {
  let skinType = 0;
window.onload = function(){
  skinType = localStorage.getItem("finalResult");
  console.log(skinType);
  if(skinType==1){
    cNameContainer.innerHTML="保養建議：乾性肌";
    tip1Container.innerHTML="乾性肌膚最重要的就是注重補水，多喝水</br>不僅提升新陳代謝，也能讓肌膚水潤、透</br>亮，此外，維持規律的睡眠，並減少油炸</br>、辛辣的食物，也助於調整體質！";
    tip2Container.innerHTML="保養要注重油、水平衡，除了基本的化妝</br>水外，也可以視狀況加入保養油，滋潤乾</br>燥的肌膚，並依照肌膚狀況，每週定期使</br>用高滋潤度的面膜，加強補水。";
    tip3Container.innerHTML="挑選產品時，必須避開防腐劑、香料，避</br>免對皮膚造成刺激。除此之外，使用含水</br>楊酸、Ａ酸等成份的產品前，建議先諮詢</br>醫師，免得讓乾裂更嚴重。";
  }else if(skinType==2){
    cNameContainer.innerHTML="保養建議：中性肌";
    tip1Container.innerHTML="中性肌也應該注重補水，多喝水不僅提升</br>新陳代謝，也能讓皮膚更透亮！此外，減</br>少攝取油炸、辛辣的食物，搭配規律的睡</br>眠，有助於調整體質。";
    tip2Container.innerHTML="保養要注重補水，除了基本的化妝水外，</br>也可以視狀況加入精華液滋潤肌膚，並依</br>照狀況，每週定期使用保水的面膜。";
    tip3Container.innerHTML="在皮膚清潔方面，選用清爽的洗面乳，並</br>避免香精、防腐劑等刺激物，不僅有效清</br>潔皮膚，也可以抑制油脂分泌。此外，可</br>依照皮膚狀況去角質，選用溫和、非物理</br>性的產品，若使用水楊酸、Ａ酸，則需要</br>按照醫生指示使用。";
  }else if(skinType==3){
    cNameContainer.innerHTML="保養建議：混合肌";
    tip1Container.innerHTML="混合肌最重要的就是油水平衡，多喝水不</br>僅提升新陳代謝，也能讓皮膚更透亮！此</br>外，減少攝取油炸、辛辣的食物，搭配規</br>律的睡眠，有助於調整體質。";
    tip2Container.innerHTML="保養要注重油、水平衡，除了基本的化妝</br>水外，也可以視狀況加入精華液滋潤肌膚</br>，並依照狀況，每週定期使用保水的面膜。";
    tip3Container.innerHTML="在皮膚清潔方面，選用清爽的洗面乳，並</br>避免香精、防腐劑等刺激物，不僅有效清</br>潔皮膚，也可以抑制油脂分泌。此外，可</br>依照皮膚狀況去角質，選用溫和、非物理</br>性的產品，若使用水楊酸、Ａ酸，則需要</br>按照醫生指示使用。";
  }else if(skinType==4){
    cNameContainer.innerHTML="保養建議：油性肌";
    tip1Container.innerHTML="油性肌膚最重要的就是油水平衡，多喝水</br>不僅提升新陳代謝，也能讓皮膚更透亮！</br>此外，減少攝取油炸、辛辣的食物，搭配</br>規律的睡眠，有助於調整體質。";
    tip2Container.innerHTML="挑選產品時，要選擇含無致粉刺成分的產</br>品，並以天然成份為主。如果包含油脂成</br>份，如合成脂、植物性油脂、動物性油脂</br>等，應注意使用量並避免添加物，減少粉</br>刺增生。";
    tip3Container.innerHTML="應注重皮膚清潔，選用清爽、專為油性肌</br>設計的洗面乳，並避免香精、防腐劑等刺</br>激物，不僅有效清潔皮膚，也可以抑制油</br>脂分泌。此外，可依照皮膚狀況去角質，</br>選用溫和、非物理性的產品，若使用水楊</br>酸、Ａ酸，則需要按照醫生指示使用。";
  }else if(skinType==5){
    cNameContainer.innerHTML="保養建議：敏感肌";
    tip1Container.innerHTML="敏感肌必須建立自己適合的保養清單，可</br>以先諮詢醫師，得知適合的產品成分，再</br>依照指示挑選產品，避免肌膚受到刺激。";
    tip2Container.innerHTML="在飲食上，要避免辛辣、油炸";
    tip3Container.innerHTML="";
  }
}




const cNameContainer = document.getElementById("CName");
const tip1Container = document.getElementById("tip1");
const tip2Container = document.getElementById("tip2");
const tip3Container = document.getElementById("tip3");
  })();
