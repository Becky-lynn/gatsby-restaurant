import React from "react"
import Default from "../layouts/default.js"
import { Link } from "gatsby"

export default function RecipePage({ pageContext }) {
    const { recipe } = pageContext;

    return (
        <Default>
          <div className="row product">
            <div className="col-sm-6">
          <h1>{recipe.name}</h1>
          <p>{recipe.description.description}</p>
          <p>
            <Link to="/" className="btn btn primary">Return to Home</Link>
          </p>
          </div>
          <div className="col-sm-6">
          <img src={recipe.image.file.url} />
          </div>
        </div>
        </Default>
    )
}