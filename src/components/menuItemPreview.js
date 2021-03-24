import React from "react"
import { Link } from "gatsby"

export default function MenuItemPreview({recipe}) {
    return(
   <>
   <div className="row menu-item-preview">
      <div className="col-sm-4 col-md-6 col-lg-4">
	    <img src={recipe.image.file.url} alt={recipe.name} />
	  </div>

      <div className="col-sm-8 col-md-6 col-lg-8">
        <h3>{recipe.name}</h3>
        <p>{recipe.description.description}</p>
        <Link to={"/recipe/" + recipe.id} class="btn btn-primary">Learn More</Link>
      </div>

      {/* <div className="col-sm-3 col-md-2 col-lg-3 recipe">
        <ul dangerouslySetInnerHTML={{ __html: props.recipe}}></ul>
      </div>

      <div className="col-sm-3 col md-2 col lg-3 recipe">
       <ol dangerouslySetInnerHTML={{__html: props.directions}}></ol>
      </div> */}

    </div>
    </>
  )
}   