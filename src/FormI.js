import React, { useState } from 'react'


export default function FormI(props) {
  const onchangeof = (e) => {
    st(e.target.value);
    ost(e.target.value);
  



  }
  const [fs, ufs] = useState("1rem");
  const secondB = () => {
    st(t.toLowerCase());
    if(t.length>0){
    props.btnm("Text Has Been Converted Into Lower Case","success");}
  }
  const [t, st] = useState("");
  const [ot, ost] = useState("");
  const funn = () => {
    let n = t.toUpperCase();
    st(n);
     if(t.length>0){
    props.btnm("Text Has Been Converted Into Upper Case","success");
    
  }}
  const THIRD = () => {
    st(ot);
     if(t.length>0){
    props.btnm("Text Has Been Converted Into Original Text","success");
  }}
  const fourth = () => {
    st("");
     if(t.length>0){
    props.btnm("Text Has Been Cleared","success");
  }}
  const [c, uc] = useState("Black");
  const fifth = () => {
    ufs(`${parseFloat(fs) + 0.1}rem`);
     if(t.length>0){
    props.btnm("Font Size Of Text Has Been Increased","success");
}
  }
  const twelve=()=>{
    let remE=t.split(/[ ]+/);
    st(remE.join(" "));
     if(t.length>0){
    props.btnm("Extra Spaces Have Been Removed","success");
    }
  }
  const sixth = () => {
    ufs(`${parseFloat(fs) - 0.1}rem`);
     if(t.length>0){
    props.btnm("Font Size Of Text Has Been Decreased","success");
}
  }
  const seven = () => {
    uc("green");
     if(t.length>0){
    props.btnm("Text Color Has Changed To Green","success");
}
  }
  const eight = () => {
    uc("black");
     if(t.length>0){
    props.btnm("Text Color Has Been Changed Back To Black","success");
  }}

  const nine = () => {
    let emptyS = "";
    for (let i = t.length - 1; i >= 0; i--) {
      emptyS += t[i];
    }
    st(emptyS);
     if(t.length>0){
    props.btnm("Text Has Been Reversed","success");
  }}
  const [onORoff, setonORoff] = useState(false);

  const ten = () => {
    if (onORoff) {
      window.speechSynthesis.cancel();
      setonORoff(false);
    }
    else {
      let nvoi = new SpeechSynthesisUtterance(t);
      window.speechSynthesis.speak(nvoi);
      setonORoff(true);
    }


  }
  const eleven = () => {
    let innerT=document.getElementById("exampleFormControlTextarea1");
    innerT.select();
    navigator.clipboard.writeText(innerT.value);
     if(t.length>0){
    props.btnm("Text Color Has Been Copied","success");
}
  }

  return (
    <div>

      <div className="container my-3">
        <h1>{props.hea}</h1>
        <div className="mb-3">
          <textarea className="form-control" placeholder="Enter Here!" style={{ fontSize: fs, color: c}} value={t} id="exampleFormControlTextarea1" onChange={onchangeof} rows="6"></textarea>
        </div><button  className={`btn btn-${props.btnC} mx-2 my-1`}  onClick={funn} >Click To Upper Case</button>
        <button className={`btn btn-${props.btnC} mx-2 my-1`} onClick={secondB}>Click To Lower Case</button>
        <button className={`btn btn-${props.btnC} mx-2 my-1`}  onClick={THIRD}>Click To convert into original</button>
        <button className={`btn btn-${props.btnC} mx-2 my-1`}  onClick={fourth}>Clear Text</button>
        <button className={`btn btn-${props.btnC} mx-2 my-1`}  onClick={fifth}>Increase Font Size</button>
        <button className={`btn btn-${props.btnC} mx-2 my-1`}  onClick={sixth}>Decrease Font Size</button>
        <button className={`btn btn-${props.btnC} mx-2 my-1`}  onClick={seven}>Change Color To Green</button>
        <button className={`btn btn-${props.btnC} mx-2 my-1`}  onClick={eight}>Convert back to original color</button>
        <button className={`btn btn-${props.btnC} mx-2 my-1`}  onClick={nine}>Click to make text reverse</button>
        <button className={`btn btn-${props.btnC} mx-2 my-1`}  onClick={ten}>Click To Listen</button>
        <button className={`btn btn-${props.btnC} mx-2 my-1`}  onClick={eleven}>Copy Text</button>
        <button className={`btn btn-${props.btnC} mx-2 my-1`}  onClick={twelve}>Remove Extra Space</button>

      </div>
      <div className="container my-1">
        <h2>Summary</h2>
        <p>{t.split(" ").filter(wrd => wrd).length} words and {t.length} characters</p>
        <p>It will take {0.001 * t.length} minutes (on average) to read it</p>
        <h2>Preview</h2>
        <p>{t===""?"First Enter Text To Preview":t}</p>
      </div>

    </div>
  )
}
