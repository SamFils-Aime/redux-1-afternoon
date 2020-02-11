import {createStore} from "redux"

const firstState = {
    name:"",
    catagory:"",
    authorFirstName:"",
    authorLastName:"",
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATE_NAME = "UPDATE_NAME"  
export const UPDATE_CATAGORY = "UPDATE_CATAGORY"
export const AUTHORFIRSTNAME = "AUTHORFIRSTNAME"
export const AUTHORLASTNAME = "AUTHORLASTNAME" 
export const ADD_INGREDIENT = "ADD_INGREDIENT"
export const ADD_INSTRUCTION = "INSTRUCTION"
export const ADD_RECIPE = "ADD_RECIPE"
export const DELETE = "DELETE"


 function reducer(state=firstState, action){
     const {type,payload}= action;
     
     switch(type){
        case UPDATE_NAME : 
         return{...state,
        name: payload}
        case UPDATE_CATAGORY :
            return {...state,
            catagory:payload}
        case AUTHORFIRSTNAME :
            return{
                ...state,
                authorFirstName: payload
            }
        case AUTHORLASTNAME:
            return {
                ...state,
                authorLastName:payload
            }
        case ADD_INGREDIENT:
            const newingedient = [...state.ingredients,payload]
            return { 
                ...state,
                ingredients: newingedient
            }
        case ADD_INSTRUCTION:
            const newinstructions = [...state.instructions,payload]
            return{
                ...state,
                instructions: newinstructions
            }
            case ADD_RECIPE:
                const {
                  name,
                  category,
                  authorFirst,
                  authorLast,
                  ingredients,
                  instructions
                } = state;
                const recipe = {
                  name,
                  category,
                  authorFirst,
                  authorLast,
                  ingredients,
                  instructions
                };
                const newRecipes = [...state.recipes, recipe];
                return { ...state, recipes: newRecipes };
         default: return state;
     }
 }

 export default createStore(reducer)