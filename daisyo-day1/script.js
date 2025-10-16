const helloBtn=document.getElementByld('helloBtn')
const message=document.getElementByld('message')

helloBtn.addEventListener('click',()=>{
    const hour=new Date().getHours();
    let greeting='こんにちは！';
    if(hour<12){
        greeting='おはようございます！';
    }else if(hou>=18){
        greeting='こんばんは！';
    }
    message.textContent=`${greeting}GitHub Pagesの公開に成功しました！`;
});