import { useState } from "react"
import Header from "./components/Header/Header"
import Mainheading from "./components/Main/Mainheading"
import Cookings from "./components/Main/mainbody/Cookings"
import 'react-toastify/dist/ReactToastify.css';
import Recipes from "./components/Main/mainbody/Recipes"
import { ToastContainer, toast } from 'react-toastify';
import Preparings from "./components/Main/mainbody/Preparings";

function App() {
  const [cookings, setCookings] = useState([]);

  const handleCookButton = recipe => {
    const isPresent = cookings.find((cooking) => cooking.recipe_id === recipe.recipe_id)
    if (!isPresent) {
      const newcookings = [...cookings, recipe];
      setCookings(newcookings)
    }
    else {
      toast("already existed!")
    }
  }

  const [preparings, setPreparings] = useState([])
const [time,setTime] = useState(0)
const [calories,setCalories] = useState(0)

  const handlePreparing = (cooking,preparingTime,caloriesData) => {
    const newPreparings = [...preparings, cooking];
    setPreparings(newPreparings)

    const legalTime = parseInt(preparingTime);
    setTime(time + legalTime);

    const legalCalories = parseInt(caloriesData);
    setCalories(calories+legalCalories)

    const filterProducts = cookings.filter(product=>product.recipe_id !== cooking.recipe_id)
    setCookings(filterProducts)
  }
  return (
    <>

      <Header></Header>
      <Mainheading></Mainheading>
      <div className="flex gap-6 container mx-auto px-[130px] font-lexend mt-12">
        <Recipes handleCookButton={handleCookButton}></Recipes>
        <div className="border-[1px] border-[#28282833] rounded-lg pt-6">
          <Cookings handlePreparing={handlePreparing} cookings={cookings}></Cookings>
          <Preparings preparings={preparings} time={time} calories={calories}></Preparings>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
