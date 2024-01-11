
$(document).ready(function(){

    // import view port library function
    jQuery.extend(verge);
  
    // smooth scrolling of viewport to target
    $('a[href^="#"]').click(function(event) {
      event.preventDefault();
      $('html,body').animate({
        scrollTop: $(this.hash).offset().top - 50
      }, 900);
    });
  
    $('#down').click(function() {
      $('html,body').animate({
        scrollTop: $('#about').offset().top - 50
      }, 900);
    });
  
    var currentTime = new Date();
    var year = currentTime.getFullYear();
  
    // data for the portfolio cards front and back
    var projectData = [
      {
        title: 'CancerCareConnect',
        text: '<p><strong>CancerCareConnect</strong> is made for a client <br> to handle info about lung metastasis.<br>can upload and share details <br>like names, primary tumor info, <br>metastasis count, and CT images securely. <br>The site has a private login system <br>for the surgeon to manage content. <br>It also shows a pie chart <br> with the types of primary tumors.<br></p><strong>Technologies Used:</strong><p>HTML, CSS, JavaScript,Python,Django, <br>and SQL</p>',
       
     
        image: ['images/pr3.png'],
        site: [
          ['Source-Code', 'fa-folder', 'https://github.com/samhithaarani/cancercareconnect']
          ,['Live Site', 'fa-link', 'https://metastaze.online/login/']
        ]
      }, {
        title: 'Netflix-Clone',
        text: '<p>This Application Provides a beautiful <br> interface to users to know about recent<br> movie trends,and provides a brief <br> descriptionabout world’s best <br> movies,as well users<br> are able to see movie trailers of <br>different genres.Tmdb API isused to <br>get information about different movies.</p> <strong>Technologies Used:</strong>ReactJS<br> ',
  
        image: ['https://i.pinimg.com/564x/79/d6/c0/79d6c0ea1a3f4fc704f2c35539671c5a.jpg'],
        site: [
          ['Source-Code', 'fa-folder', 'https://s.codepen.io/MutantSpore/full/dojjre'],
          ['Live Site', 'fa-link', 'https://samflix-54f1e.web.app/']
        ]
      }, {
        title: 'TODO APP',
        text: '<p>Simple<strong> TodoList</strong> app which helps us <br>to create ,edit and delete <br> todoitems along with the description.</p><strong>Technologies Used:</strong><p>ReactJs</p>',
       
        image: ['images/pr1.png'],
        site: [
          ['Source-Code', 'fa-folder', 'https://github.com/samhithaarani/todo-task']
        ]
      },
      /*                    
                          {
           title: 'Camper News',
           text: '<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/zipline-stylize-stories-on-camper-news" target="_blank"><i>Stylize Stories on Camper News</i></a>. The user can browse recent posts from Camper News.</p> <strong>Code:</strong> HTML5, CSS3, Javascript, jQuery<br> <strong>Layout:</strong> Bootstrap, Masonary<br> <strong>Graphics Editor:</strong> Gimp, pixlr.com<br> <strong>Images:</strong> unsplash.com<br>  <strong>Data:</strong> Free Code Camp news API',
  
           image: ['http://2am.ninja/img/news.jpg'],
           site: [
             ['CodePen', 'fa-codepen', 'https://s.codepen.io/MutantSpore/debug/vOvBqY']
           ]
         }, 
       */
      {
        title: 'Search Buddy',
        text: '<p><strong>Search Buddy </strong>Provides an interface <br>for users to search anything <br>and it shows the best relevant<br> Results based onusers choice, <br>this app is simply the <br>blueprint of the American<br> Ad Agency Craigslist.org. and <br>uses the interesting and <br>powerful web scraping <br>module BeautifulSoup.<br><strong>Technologies Used:</strong>HTML,CSS,Django</p>',
        image: ['images/pr4.png'],
        site: [
          ['Source-code', 'fa-folder', 'https://github.com/samhithaarani/searchbuddy']
        ]
      }, {
        title: 'CMS',
        text: '<p><strong>Content Management System</strong> is an app for <br>students to get study materials.<br> Admins share content with<br> specific branches. Students log in to <br>access what they need, <br>and admins log in to manage resources.<br></p>.<br><strong>Technologies Used :</strong> HTML,CSS,<br>JS,PHP,SQL',
        image: ['images/pr5.png'],
        site: [
          ['Source-Code', 'fa-folder', 'https://github.com/samhithaarani/Content-Management-System']
        ]
      },
      /*                 
                       {
        title: 'Force Graph',
        text: '<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/show-relationships-with-a-force-directed-graph" target="_blank"><i>Show Relationships with a Force Directed Graph</i></a>. The user can see a Force-directed Graph that shows which campers are posting links on Camper News to which domains.</p> <strong>Code:</strong> HTML5, CSS3, D3, SVG, Javascript, jQuery<br> <strong>Layout:</strong> Bootstrap<br>  <strong>Data:</strong> Free Code Camp news API',
  
        image: ['http://2am.ninja/img/force-graph.jpg'],
        site: [
          ['CodePen', 'fa-codepen', 'https://s.codepen.io/MutantSpore/debug/KVdbMO']
        ]
      }, 
      
      */
      {
        title: '<small>Brain Tumor Classification(FSL)</small>',
        text: 'We made a smart system to find brain<br> tumors using special techniques. By <br>teaching it with brain tumor data, <br>it can tell two types of tumors apart.<br> This helps doctors make better <br>treatment choices, potentially<br> improving patient health.<br><strong>Technologies Used:</strong>Deep Learning',
        image: ['https://i.pinimg.com/736x/5b/18/96/5b1896043afdf90b34ab20c3637a10f3.jpg'],
        site: [
          ['Source-Code', 'fa-folder', 'https://colab.research.google.com/drive/1vnVUmAMR_tbskg5Ae-8-UpcJPknw-Hhy#scrollTo=M7l3qzY-d2AT']
        ]
      }
    ];
  
    // add listener to all the cards for click flipping
    function addListener() {
      var cards = document.querySelectorAll(".card.effect_click");
  
      for (var i = 0; i < cards.length; i++) {
        clickListener(cards[i]);
      }
  
      function clickListener(card) {
        card.addEventListener("click", function() {
          this.classList.toggle("flipped");
        });
      }
    }
  
    // create, populate and show portfolio project cards
    function showProjectCards() {
      var html = '';
  
      projectData.forEach(function(project) {
        html += '<div class="col-sm-6 col-md-4">';
        html += '<div class="card effect_click"><div class="card_front">';
        html += '<figure><img class="img-responsive" src="' + project.image[0] + '">';
        html += '<figcaption class="project-title">';
        html += project.title;
        html += '</figcaption></figure></div>';
  
        html += '<div class="card_back"><figure>';
        html += '<div class="project-title">' + project.title + '</div>';
        html += '<figcaption">';
        html += '<div class="project-body">' + project.text + '</div>';
        html += '<div><a data-toggle="tooltip" title="' + project.site[0][0] + '" data-placement="top" href="' + project.site[0][2] + '" target="_blank" class="btn btn-primary btn-lg btn-circle btn-lnk btn-lnk0"><i class="fa ' + project.site[0][1] + '" aria-hidden="true"></i></a>';
  
        if (typeof project.site[1] !== 'undefined') {
          html += '<a data-toggle="tooltip" title="' + project.site[1][0] + '" data-placement="top" href="' + project.site[1][2] + '" target="_blank" class="btn btn-primary btn-lg btn-circle btn-lnk btn-lnk1"><i class="fa ' + project.site[1][1] + '" aria-hidden="true"></i></a>';
        }
  
        html += '</div></figcaption></figure></div>';
        html += '</div>';
        html += '</div>';
      });
  
      $('#theProjects').append(html);
      addListener();
    }
  
    showProjectCards();
    $(".copyright").append("<span>© " + year + " Samhitha Arani. All rights reserved</span>");
  
    // turn on bootstrap tooltips
    $('[data-toggle="tooltip"]').tooltip();
  
    
  });