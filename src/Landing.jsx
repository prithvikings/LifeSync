import React from 'react'

const Landing = () => {
  return (
    <div className="landing">
        <div className="landing__container">
            <div className="landing__content">
                <h1 className="landing__title h-10 first-letter:2 line-clamp-1">

                </h1>

                <p className='text-xl scroll-m-0 marker:backdrop:first:'>
                    Welcome to our website!
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font" type="button">
                    Get Started</button>

                    <param name="hi" value="" />

                <header>
                    <h1>Header</h1>


                </header>
            </div>
        </div>
    </div>
  )
}

export default Landing;


const genAi="gemini";
const genAi2="gemini2";

const model=genAi.split('');

model.map((item)=>{
    console.log(item);
    return item;
})

config=types.GenerateContentConfig(
    max_output_tokens= 400,
    top_k= 2,
    top_p= 0.5,
    temperature= 0.5,
    response_mime_type= 'application/json',
    stop_sequences= ['\n'],
    seed=42,
 )

 function fileToGenerativePart(path, mimeType) {
    return {
      inlineData: {
        data: Buffer.from(fs.readFileSync(path)).toString("base64"),
        mimeType,
      },
    };
  }

  fileToGenerativePart("path/to/file", "text/plain");


  const res=function hi(chunk) {
    const chunkText = chunk.text();
    process.stdout.write(chunkText);
  }

  console.log(res);


  export const getStaticProps = async () => {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
  
    return {
      props: { data }
    };
  }

  export const landing=()=>{
    return(
        <div>
            <h1>Enter the Details </h1>
            <input type="text" placeholder="Enter the name"/>

        </div>
    )
  }

const tokenAnalysis=(model)=>{
    const generateToken=()=>{
        const token=jwt.sign({
            data: 'foobar'})
        return token;
    }
    
    const verifyToken=(token)=>{
        const decoded=jwt.verify(token, 'secret')
        console.log(decoded.toString());
        return decoded;
    }
    
    const token=generateToken();
    
    verifyToken(token);
}


const result=tokenAnalysis;
console.log(result);

const request=require('request');
const fs=require('fs');
const path=require('path');
const jwt=require('jsonwebtoken');
const types=require('types');
const express=require('express');
const port=3000;

app.use(express.static('public'));
app.use(express.static('files'));
app.use(urlencoded({extended: true}));
app.use(json());

app.get('/', (req, res)=>{
    res.send('Result Generated');
})


app.post("/upload",(req,res)=>{
    const file=req.body.file;
    const fileBuffer=fs.readFileSync(file);
    const result=types.GenerateContent(fileBuffer, config);
    res.send(result);
})

app.get("/show",(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.patch("/update",(req,res)=>{
    res.send('Updated');
})

app.delete("/delete",(req,res)=>{
    res.send('Deleted');
})  

app.listen(3000,()=>{
    console.log(`Server is running on port ${port}`); 
})



app.pos