---
layout: base
title: "Was My Conversation Hacked?"
permalink: /
---

<div>
  <div class="button-wrap">
     {% for prop in site.props %}
      <div class="collapse-custom" data-toggle="collapse-custom" data-target="#explanation-{{ prop.index }}" id="button-{{ prop.index }}" >{{prop.statement}}</div>

      {% endfor %}
  </div>

  <div id="results">
   {% for prop in site.props %}
    <div id="explanation-{{ prop.index }}" class="collapse">
      <p><strong>{{prop.message}}</strong></p>
      <p>You were likely exposed to Russian propaganda on Facebook! {{ prop.interest }} was viewed {{ prop.views }} from 2015 until August of this year.</p>
      <p>Russia uses propaganda to divide Americans on contentious social issues. They capitalize on outrage and hot button issues to push Americans further to the extremes, further poisoning our discourse.</p>
      <p>What’s the best defense against propaganda? Exposure. Let your friends and family know that you’ve been exposed.</p>

      <p><a class="twitter-share-button"
        href="https://twitter.com/intent/tweet?text=Hello%20world">
      Tweet</a>
      <iframe style="border:none;overflow:hidden"
            src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button&size=small&mobile_iframe=true&width=59&height=20&appId"
            width="59"
            height="20"
            scrolling="no"
            frameborder="0"
            allowTransparency="true">
          </iframe></p>
      <hr>
      <div class="credits">{% include credits.html %}</div>
    </div>
    {% endfor %}
  </div>
</div>

<!--
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
-->


