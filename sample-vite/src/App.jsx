import { useState } from 'react';
import './App.css'
import { Input } from './assets/components/Input';
import { InputOutput } from './assets/components/InputOutput';
import { Log } from './assets/components/Log';
import { RegisterButton } from './assets/components/RegisterButton';

function App() {

  // const records = [
  //   { title: "勉強の記録1", time: 1 },
  //   { title: "勉強の記録2", time: 3 },
  //   { title: "勉強の記録3", time: 5 }
  // ];

  const [records, setRecords] = useState([]);

  const [content, setContent] = useState("");
  const [time, setTime] = useState(0);
  const [error, setError] = useState("");
  const [sumTime, setSumTime] = useState(0);

  const onRegister = () =>{
    if(content == "" || time <= 0){
      setError(true);
      return;
    }
    else{
      setError(false);
    }

    const newRecords = [...records, {title:content, time:time}];
    setRecords(newRecords);

    setSumTime(sumTime + parseInt(time, 10));

     setContent("");
     setTime(0);
  }

  return (
    <>
      <h1>学習記録一覧</h1>
      <Input title = "学習内容" value = {content} setValue={setContent} placeholder = "学習記録を記載ください" type="text"/>
      <Input title = "学習時間" value = {time} setValue={setTime} placeholder = "学習時間を記載ください" type="number"/>

      <InputOutput title="入力されている学習内容" text={content}/>
      <InputOutput title="入力されている学習時間" text={time}/>
      <RegisterButton onRegister={onRegister}/>

      {error && <p>入力されてない項目があります</p>}
      
      <Log records = {records} />

      <p>{sumTime} / 1000(h)</p>

    </>
  )
}

export default App
