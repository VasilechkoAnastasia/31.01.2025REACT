import './App.css';
import { Test1, MyComponents, Test2, MyApp } from './Components/Task1';
import { Profile ,Main} from './Components/Task2';
import { Ifrender } from './Components/Task3';
import{ShoppingList} from './Components/Task4'
import { Card} from './Components/Task5';

function App()
 {
  // const user = {
  //   name: 'Bill Gates',
  //   imageUrl: 'bg.png',
  //   imageW: 260,
  //   imageH: 200,
  // };
  // const Musk = {
  //   name: 'Elon Reeve Musk',
  //   imageUrl: 'Musk.jpg',
  //   imageW: 200,
  //   imageH: 300
  // };
  // const Robert = {
  //   name: 'Robert Toru Kiyosaki',
  //   imageUrl: 'Robert.jpg',
  //   imageW: 200,
  //   imageH: 300
  // };
  const Me = {
    name: 'Anastasia Vasilechko',
    imageUrl: 'me.jpg',
    imageW: 200,
    imageH: 300,
    imageR: 40,
    city: 'Ukraine, Odessa' ,
    phone: '+380674345353'

  };

  return (
    <div>

     {/* <Test1></Test1>
     <MyComponents></MyComponents>  */}

     {/* <MyApp> </MyApp>  */}
     {/* <Profile user = {user} text="Тут какой-то текст..."></Profile> 
     <Profile user = {Musk} text="Маск родился и вырос в Претории, Юар"></Profile>  
     <Profile user = {Robert} text="Businessman and author"></Profile>       */}
     <Profile user = {Me} text="“Sometimes you win, sometimes you learn.”"></Profile>    

     {/* <Ifrender></Ifrender> */}
     {/* <ShoppingList></ShoppingList> */}
     {/* <Card user = {user}></Card>
     <Card user = {user2}></Card>
     <Card user = {user}></Card> */}
  

    </div>
  );
}

export default App;


