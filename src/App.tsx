import Completed from "./components/completed/Completed"
import Doing from "./components/doing/Doing"
import Incomplete from "./components/incomplete/Incomplete"
import OverDue from "./components/overdue/OverDue"
import Todo from "./components/todo/Todo"
import UnderReview from "./components/underReview/UnderReview"

function App() {

  return (
    <div className="h-screen p-2 flex overflow-x-auto gap-x-3">
        <Incomplete/>
        <Todo/>
        <Doing/>
        <UnderReview/>
        <Completed/>
        <OverDue/>
    </div>
  )
}

export default App
