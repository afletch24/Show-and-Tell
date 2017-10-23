import React, { Component } from "react";
import API from "../../utils/API";
import "./ProjectForm.css";

class ProjectForm extends Component {
  state = {
    projectName: "",
    image: "",
    description: "",
    technologiesKeywords: "",
    team: "",
    link: "",
    github: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = event => {
    console.log(this.props.user);
    event.preventDefault();
    console.log("handleFormSubmit from ProjectForm.js");
    if (this.state.projectName) {
      var myProject = {
        projectName: this.state.projectName,
        image: this.state.image,
        description: this.state.description,
        technologiesKeywords: this.state.technologiesKeywords,
        team: this.state.team,
        link: this.state.link,
        github: this.state.github,
        userid: this.props.user
      };
      console.log(myProject);
      if (this.props.project.id) {
        API.updateProject(myProject)
          .then(this.props.update())
          .catch(err => console.log(err));
      } else {
        API.saveProject(myProject)
          .then(this.props.update())
          .catch(err => console.log(err));
      }
    }
  };

  componentWillReceiveProps= (nextProps) => {
    console.log("True");
    console.log(nextProps);
}

render() {
  return (
<div>

  <div className="row">
    <div className="col s12">
      <div className="card #bdbdbd grey darken-1 project-form">
        <div className="card-content white-text">
          
          <span className="card-title">
            <div className ="row row-project-form">
            <div className="input-field col s4">
              <input
                defaultValue={this.props.project.project}
                onChange={this.handleInputChange}
                name="projectName"
                placeholder="Project Name (required)"
                type="text"/>
            </div>

              <div className="input-field col s4">
                  <input           
                  defaultValue={this.props.project.link}
                  onChange={this.handleInputChange}
                  name="link"
                  placeholder="Link URL (ex: https://www.myproject.com)"
                  type="text"/>
              </div>

              <div className="input-field col s4">
                <input           
                  defaultValue={this.props.project.github}
                  onChange={this.handleInputChange}
                  name="github"
                  placeholder="GitHub URL (ex: https://github.com/username/project)"
                  type="text"/>
              </div>

            </div>
          </span>

          <div className ="row row-project-form">

              <div className="input-field col s4">
                  <input           
                  defaultValue={this.props.project.image}
                  onChange={this.handleInputChange}
                  name="image"
                  placeholder="Image URL (ex: https://www.myimage.com)"
                  type="text"/>
              </div>

              <div className="input-field col s6">
                  <input           
                  defaultValue={this.props.project.team}
                  onChange={this.handleInputChange}
                  name="team"
                  placeholder="Team (ex: Tommy, Jill, Bobby)"
                  type="text"/>
              </div>

          </div>

          <div className="row row-project-form">
            <div className="input-field col s12">
              <input           
              defaultValue={this.props.project.description}
              onChange={this.handleInputChange}
              name="description"
              maxlength="150"
              placeholder="This is a really cool app that solves a problem"
              type="text"/>
            </div>
          </div>

          <div className="row row-project-form">
              <legend>Technologies used</legend>
                <div className="input-field col s2">
                  <input type="checkbox" id="check-1" name="technologiesKeywords" onChange={this.handleInputChange} defaultValue={this.state.technologiesKeywords}/>
                  <label for="check-1">HTML</label>
                </div>
                <div className="input-field col s2">
                  <input type="checkbox" id="check-2" name="technologiesKeywords" onChange={this.handleInputChange} defaultValue={this.state.technologiesKeywords}/>
                  <label for="check-2">Javascript</label>
                </div>
                <div className="input-field col s2">
                  <input type="checkbox" id="check-3" name="technologiesKeywords" onChange={this.handleInputChange} defaultValue={this.state.technologiesKeywords}/>
                  <label for="check-3">CSS and/or frameworks (Bootstrap)</label>
                </div>
                <div className="input-field col s2">
                  <input type="checkbox" id="check-4" name="technologiesKeywords" onChange={this.handleInputChange} defaultValue={this.state.technologiesKeywords}/>
                  <label for="check-4">Database (mySQL, MongoDB, Firebase, etc)</label>
                </div>
                <div className="input-field col s3">
                  <input type="text" id="other" name="technologiesKeywords" onChange={this.handleInputChange} defaultValue={this.state.technologiesKeywords} placeholder="Other"/>
                </div>
          </div>

            <div className="card-action">
              <button 
                // disabled={!(this.state.author && this.state.title)} 
                className="btn waves-effect waves-light project-submit" 
                type="submit" 
                onClick={this.handleFormSubmit} 
                name="action">Submit
                <i className="material-icons right">send</i>
                </button>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
   );
	}
};
export default ProjectForm;