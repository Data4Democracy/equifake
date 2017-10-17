---
layout: base
title: "Were you targeted?"
permalink: /
---

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
  <h2>Find out for yourself</h2>
  <div class="btn-group">
 {% for prop in site.props %} 
  <button type="button" class="button" data-toggle="collapse" data-target="#explanation-{{ prop.index }}" id="button-{{ prop.index }}" >{{prop.statement}}</button>

  {% endfor %}
</div>
<div id="results">
 {% for prop in site.props %} 
<div id="explanation-{{ prop.index }}" class="collapse">
    <p><strong>{{prop.message}}</strong></p>
    <p>You were likely exposed to Russian propaganda on Facebook! {{ prop.interest }} was viewed {{ prop.views }} from 2015 until August of this year.</p>
    <p>Russia uses propaganda to divide Americans on contentious social issues. They capitalize on outrage and hot button issues to push Americans further to the extremes, further poisoning our discourse.</p>
    <p>What’s the best defense against propaganda? Exposure. Let your friends and family know that you’ve been exposed. Share {{ site.title }} on Twitter and Facebook.</p>
  </div>
    {% endfor %}
    </div>
</div>



</body>

{% for prop in site.props %}
  <div id="interest-{{ prop.index }}" class="interest">
    {{ prop.interest }} - {{ prop.question}}
  </div>
  <div id="prop-{{ prop.index }}" class="prop" style="display: none">
    <p><strong>{{prop.question}}</strong> Congratulations. <b>You</b> were likely exposed to Russian propaganda on Facebook! {{ prop.interest }} was viewed {{ prop.views }} from 2015 until August of this year.</p>
    <p>Russia uses propaganda to divide Americans on contentious social issues. They capitalize on outrage and hot button issues to push Americans further to the extremes, further poisoning our discourse.</p>
    <p>What’s the best defense against propaganda? Exposure. Let your friends and family know that you’ve been exposed. Share {{ site.title }} on Twitter and Facebook.</p>
  </div>

{% endfor %}


