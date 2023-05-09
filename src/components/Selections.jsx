import React from 'react';

const Selections = ({places, place, setPlace}) => {
    return (
        <div className={"selections"}>
            <div>
                <div>Выберите башню</div>
                <select value={place.tower} onChange={e => setPlace({...place, tower: e.target.value})}>
                    {places.towers.map((tower, index) =>
                        <option key={index} value={tower}>{tower}</option>
                    )}
                    <option value={"Не выбрано"} disabled>Не выбрано</option>
                </select>
            </div>

            <div>
                <div>Выберите этаж</div>
                <select value={place.floor} onChange={e => setPlace({...place, floor: e.target.value})}>
                    {places.floors.map((floor, index) =>
                        <option key={index} value={floor}>Этаж {floor}</option>
                    )}
                    <option value={"Не выбрано"} disabled>Не выбрано</option>
                </select>
            </div>
            <div>
                <div>Выберите комнату</div>
                <select value={place.room} onChange={e => setPlace({...place, room: e.target.value})}>
                    {places.rooms.map((room, index) =>
                        <option key={index} value={room}>Комната {room}</option>
                    )}
                    <option value={"Не выбрано"} disabled>Не выбрано</option>
                </select>
            </div>
        </div>
    );
};

export default Selections;