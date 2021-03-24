import React from "react"
import Default from "../layouts/default.js"
import "./index.css"
import { graphql } from "gatsby"
import MenuItemPreview from "../components/menuItemPreview.js"

// markup
const IndexPage = ({ data }) => {
  return (
    <Default>
    <h1>Welcome to Thanksgiving Family Feast</h1>
     <p>Are you hosting this years holiday dinner?</p>
     <p className="intro">We want to help make preparing your holiday feast less stressful and more enjoyable. <br/> Let us do all the heavy cooking so you can spend more time with your family and friends. 
</p>
      
      {data.allContentfulRecipes.nodes.map(recipe =>(
        <MenuItemPreview recipe={recipe}></MenuItemPreview>
      ))}
    </Default>
  )
}

export default IndexPage

export const query = graphql`
query MyQuery {
  allContentfulRecipes {
    nodes {
      id
      name
      description {
        description
      }
      image {
        file {
         url
        }
      }
    }
  }
}
`


