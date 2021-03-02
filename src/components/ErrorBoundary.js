import axios from "axios";
import { Component } from "react";

export default class ErrorBoundary extends Component {
   constructor(props) {
      super(props);
      this.state = {
         hasError: false
      };
   }

   static getDerivedStateFromError(error) {
      return { hasError: true }
   }

   componentDidCatch(error, errorInfo) {
      axios.post("/.netlify/functions/error-logging", {
         body: {
            error,
            errorInfo
         }
      })
      .then(response => console.log(response));
   }

   render() {
      if (this.state.hasError) {
         return (
            <>
            <h1>Oops, something went wrong!</h1>
            <p>{this.props.message}</p>
            </>
         )
      }

      return this.props.children;
   }
}