import React from "react";
import { Accordion } from "react-bootstrap";
import "./QnA.css";

const QnA = () => {
  return (
    <div className="mt-5 mb-5">
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>#1 How does react works?</Accordion.Header>
          <Accordion.Body>
            <p>
              React makes it easier to create dynamic web applications because
              it requires less coding and offers more functionality, as opposed
              to JavaScript, where coding often gets complex very quickly. React
              uses Virtual DOM, thereby creating web applications faster.
              Virtual DOM compares the components’ previous states and updates
              only the items in the Real DOM that were changed, instead of
              updating all of the components again, as conventional web
              applications do. Components are the building blocks of any React
              application, and a single app usually consists of multiple
              components. These components have their logic and controls, and
              they can be reused throughout the application, which in turn
              dramatically reduces the application’s development time. React
              follows a unidirectional data flow. This means that when designing
              a React app, developers often nest child components within parent
              components.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            #2 What is the difference between Props vs State?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              1. Props permits to pass data from one component to different
              components as an argument. But state holds information concerning
              the components that has to be bestowed to that store the read
              within the state.
              <p>
                {" "}
                2. Props are immutable so they cannot be changed or modified
                when they have been set. But the data is keep within the state,
                which could be modified over time.
              </p>{" "}
              <p>
                {" "}
                3. Props are often accessed with its own child component. Where,
                the state cannot be accessed through its child components.
              </p>{" "}
              <p>
                {" "}
                4. Props are accustomed to communicate between components.
                Whereas, states can be used for rendering the dynamic changes
                within the component.
              </p>
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default QnA;
