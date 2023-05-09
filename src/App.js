import Selections from "./components/Selections";
import {useState} from "react";
import FormButton from "./components/UI/button/FormButton";
import FormInput from "./components/UI/input/FormInput";
import FormComment from "./components/UI/textarea/FormComment"
import './App.css'


function App() {
    const floors = new Array(25).fill(0).map((_, index) => index + 3)

    const rooms = new Array(10).fill(0).map((_, index) => index + 1)

    const towers = ['Башня А', 'Башня Б']

    const [place, setPlace] = useState({tower: "Не выбрано", floor: "Не выбрано", room: "Не выбрано"});

    const [error, setError] = useState(null)

    const [selectedDate, setSelectedDate] = useState(new Date());

    const [startTime, setStartTime] = useState("");

    const [endTime, setEndTime] = useState("");

    const [comment, setComment] = useState("")

    const sendData = () => {
        const postRequest = {}
        postRequest.tower = place.tower
        postRequest.floor = place.floor
        postRequest.room = place.room
        postRequest.date = selectedDate.toDateString()
        postRequest.time = `${startTime} - ${endTime}`
        postRequest.comment = comment
        console.log(JSON.stringify(postRequest))
    }

    const clearForm = (event) => {
        event.preventDefault()
        setPlace({tower: "Не выбрано", floor: "Не выбрано", room: "Не выбрано"})
        setComment("")
        const inputs = document.querySelectorAll("input")
        inputs.forEach(input => {
            input.value = ""
        })
        setError(null)
    }
    const changeTime = e => {
        setSelectedDate(new Date(e.target.value))
    }
    const validateData = (event) => {
        event.preventDefault();
        for (let key in place) {
            if (place[key] === 'Не выбрано'){
                renderError(`Выберите ${key}`)
                return
            }
        }
        if (document.querySelector("input[type='date']").value.length === 0){
            renderError("Выберите дату")
            return
        }
        if (startDate() < new Date(Date.now())) {
            renderError("Выберите корректные дату и время (переговорные в прошлом времени не работают)")
            return
        }
        if (startTime.length && endTime.length && (startTime < endTime)){
            setError(null)
            sendData()
        }
        else {
            renderError("Введите корректный интервал, на который Вы хотите забронировать переговорную")
        }
    }
    const startDate = () => new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), Number(startTime.slice(0, 2)),Number(startTime.slice(3)))

    const renderError = error => {
        setError(error)
    }



  return (
    <div className="App container">
        <form onSubmit={validateData}>
            <div className="wrapper">
                {error && <h1>{error}</h1> }
                <Selections places={{floors: floors, rooms: rooms, towers: towers}} place={place} setPlace={setPlace}/>
                <FormInput name={"Дата бронирования"} type={"date"} onChange={e => changeTime(e)}/>
                <FormInput name={"Время начала"} type={"time"} onChange={e => setStartTime(e.target.value)} />
                <FormInput name={"Время окончания"} type={"time"} onChange={e => setEndTime(e.target.value)} />
                <FormComment name={"Комментарий"} value={comment} onChange={e => setComment(e.target.value)}></FormComment>
                <FormButton type={"submit"}>Отправить</FormButton>
                <FormButton onClick={clearForm}>Очистить</FormButton>
            </div>
        </form>
    </div>
  );
}

export default App;
