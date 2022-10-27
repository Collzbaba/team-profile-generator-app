const generateTeam = (team) => {

    //create manager html card
    const generateManager = (manager) => {
      return `
      <div class="card employee-card shadow mb-5 rounded" style="width: 18rem;">
        <div class="card-header bg-primary">
          <h2 class="card-title text-light">${manager.getName()}</h2>
          <h3 class="card-title text-light"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="container bg-light">
          <div class="card-body">
            <ul class="list-group list-group-flush table-bordered">
              <li class="list-group-item">ID: ${manager.getId()}</li>
              <li class="list-group-item">Email: 
                <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
          </div>
        </div>
      </div>
      `;
    };
    //create engineer html card
  const generateEngineer = (engineer) => {
    return `
      <div class="card employee-card shadow mb-5 rounded" style="width: 18rem;">
        <div class="card-header bg-primary">
          <h2 class="card-title text-light">${engineer.getName()}</h2>
          <h3 class="card-title text-light"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
        </div>
        <div class="container bg-light">
          <div class="card-body">
            <ul class="list-group list-group-flush table-bordered">
              <li class="list-group-item">ID: ${engineer.getId()}</li>
              <li class="list-group-item">Email: 
                <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li class="list-group-item">GitHub: 
                <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
            </ul>
          </div>
        </div>
      </div>
    `;
  };
  //create Intern html card
  const generateIntern = (intern) => {
    return `
      <div class="card employee-card shadow mb-5 rounded" style="width: 18rem;">
        <div class="card-header bg-primary">
          <h2 class="card-title text-light">${intern.getName()}</h2>
          <h3 class="card-title text-light"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="container bg-light">
          <div class="card-body">
            <ul class="list-group list-group-flush table-bordered">
              <li class="list-group-item">ID: ${intern.getId()}</li>
              <li class="list-group-item">Email: 
                <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  };
