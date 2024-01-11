
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
        text: '<p><strong>CancerCareConnect</strong> is made for a client to handle info about lung metastasis.  can upload and share details like names, primary tumor info, metastasis count, and CT images securely. The site has a private login system for the surgeon to manage content. It also shows a pie chart with the types of primary tumors.</p><strong>Technologies Used:</strong><p>HTML, CSS, JavaScript,Python,Django, and SQL</p>',
       
     
        image: ['images/pr3.png'],
        site: [
          ['Source-Code', 'fa-folder', 'https://github.com/samhithaarani/cancercareconnect']
          ,['Live Site', 'fa-link', 'https://metastaze.online/login/']
        ]
      }, {
        title: 'Netflix-Clone',
        text: '<p>This Application Provides a beautiful interface to users to know about recent movie trends,and provides a brief description about world’s best movies,as well users are able to see movie trailers of different genres.Tmdb API isused to get information about different movies.</p> <strong>Technologies Used:</strong>ReactJS<br> ',
  
        image: ['https://i.pinimg.com/564x/79/d6/c0/79d6c0ea1a3f4fc704f2c35539671c5a.jpg'],
        site: [
          ['Source-Code', 'fa-folder', 'https://s.codepen.io/MutantSpore/full/dojjre'],
          ['Live Site', 'fa-link', 'https://samflix-54f1e.web.app/']
        ]
      }, {
        title: 'TODO APP',
        text: '<p>Simple<strong> TodoList</strong> app which helps us to create , edit and delete todoitems along with the description.</p><strong>Technologies Used:</strong><p>ReactJs</p>',
       
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
        text: '<p><strong>Search Buddy </strong>Provides an interface for users to search anything and it shows the best relevant Results based onusers choice, this app is simply the blueprint of the American Ad Agency Craigslist.org. and uses the interesting and powerful web scraping module BeautifulSoup.<br><br><br><strong>Technologies Used:</strong>HTML,CSS,Django</p>',
        image: ['images/pr4.png'],
        site: [
          ['Source-code', 'fa-folder', 'https://github.com/samhithaarani/searchbuddy']
        ]
      }, {
        title: 'CMS',
        text: '<p><strong>Content Management System</strong> is an app for students to get study materials. Admins share content with specific branches. Students log in to access what they need, and admins log in to manage resources. Simple and easy!</p>.<br><br><strong>Technologies Used :</strong> HTML,CSS,JS,PHP,SQL',
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
        text: 'We made a smart system to find brain tumors using special techniques. By teaching it with brain tumor data, it can tell two types of tumors apart. This helps doctors make better treatment choices, potentially improving patient health.<br><br><br><strong>Technologies Used:</strong>Deep Learning',
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