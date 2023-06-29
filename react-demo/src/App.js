import logo from './logo.svg';
import './App.css';
import React from 'react';
import {FaTwitter} from "react-icons/fa"
import { MdClear } from "react-icons/md";
import { BsFillBellFill } from "react-icons/bs";
import { Button } from '@material-ui/core';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/withjsx_vs_withoutjsx'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import ConditionalRendering from './components/ConditionalRendering'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import Form from './components/Form'
import LifeCycleA from './components/LifeCycleA'
import Fragment from './components/Fragment'
import PureParentComponent from './components/PureComponents/ParentComponent'
import RefsDemo from './components/RefsDemo'
import FocusInput from './components/ClassCompRefs/FocusInput'
import PortalDemo from './components/PortalDemo'
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry'
import Hero from './components/ErrorBoundry/Hero'
import ClickCounter from './components/HigherOrderComps/ClickCounter'
import HoverCounter from './components/HigherOrderComps/HoverCounter'
import ClickCounterRenderProps from './components/RenderProps/ClickCounter'
import HoverCounterRenderProps from './components/RenderProps/HoverCounter'
import CounterRenderProps from './components/RenderProps/Counter'
import ComponentC from './components/Context/ComponentC';
import { UserProvider } from './components/Context/UserContext'
import Prac from  './components/Prac';
import SearchField from './components/FilterFromInput/SearchField';

function App() {
 const  message = "hello ram";
 const element = React.createElement(
   'h3',
   {className: 'testing'},
   'jsx as object'
 );

 function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  return element
}
const time = tick();
  return (
    <div>
      {/* {element}
      {time} */}
     {/* <Greet name = "Ram"  heroName = "Dhoni">
       <div>I am child props</div>s
     </Greet> */}
     {/* <Message /> */}
     {/* <LifeCycleA /> */}
     {/* <Fragment /> */}
     {/* <PureParentComponent /> */}
     {/* <RefsDemo /> */}
     {/* <FocusInput /> */}
     {/* <PortalDemo /> */}
     {/* <ErrorBoundry>
       <Hero heroName = 'batman'/>
       <Hero heroName = 'superman'/>
       <Hero heroName = 'jocker'/>
     </ErrorBoundry> */}
     {/* <Counter /> */}
     {/* <ClickCounter name = "ram"/> */}
     {/* <ClickCounterRenderProps /> */}
     {/* <HoverCounterRenderProps /> */}
     <SearchField />
     <UserProvider value = 'ram vundavalli'>
     <ComponentC />
     </UserProvider>
    
     <CounterRenderProps render = {(count, increment) => (
       <ClickCounterRenderProps count = {count} increment = {increment}/>
     )}
     />

      <CounterRenderProps render={(count, increment) => (
        <HoverCounterRenderProps count={count} increment={increment} />
      )}
      />
      <Prac />
      {/* <FaTwitter />
      <MdClear />
      <BsFillBellFill />
      <Button>hello</Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button> */}
     <HoverCounter />
     {/* <EventBind /> */}
     {/* <ParentComponent /> */}
     {/* <ConditionalRendering /> */}
     {/* <Form /> */}
     {/* <NameList /> */}
     {/* <Stylesheet primary = {true}/> */}
     {/* <Inline /> */}
     {/* <FunctionClick />
     <ClassClick /> */}
     {/* <Greet name = "vundavalli" heroName = "kohli"/> */}
     {/* <Welcome name = "Ram"  heroName = "Dhoni"/> */}
     {/* <Hello /> */}
      {/* <h1>{message}</h1> */}
    </div>
    
  );
}

export default App;
