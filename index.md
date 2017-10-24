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
      <p class="lead"><strong>{{prop.message}}</strong></p>
      <!--
      <div class="image-container">
        <img src="/assets/images/{{ prop.image }}">
        <p class="caption">{{ prop.caption }}</p>
      </div>
      -->
      <p class="lead">You were likely exposed to Russian propaganda on Facebook. {{ prop.called }}, just one of the fake pages related to {{ prop.interest }}, <a href="{{ prop.link }}">was viewed {{ prop.views }} times from 2015 until August of this year</a>.</p>
      <hr>
      <p>Russia has some of the best hackers in the world. But they're not just hacking our computer systems - they're hacking us. Manipulating us with fake ads, and spreading lies on social media to pit neighbor against neighbor.</p>
      <p>Facebook lied to us about what we were seeing and sharing. They withheld the truth about Russia trying to manipulate us. <a href="http://www.cnn.com/2017/10/09/opinions/social-media-platforms-spreading-disinformation-opinion-morgan/index.html">It's time for Silicon Valley social media companies to take responsibility for their problems</a>, fix their products, and tell us where this content is really coming from.</p>

      <p><strong>Here's how you can get involved</strong>:</p>

      <p><a href="https://actionnetwork.org/forms/get-updates-from-facebook-exposed">Sign up for email updates about FacebookExposed</a>.</p>

      <p>Share this message with friends and neighbors - especially anyone who follows or shares posts about gun rights, immigration, Black Lives Matter, or other issues that divide us.</p>

      <p><a class="twitter-share-button"
        href="https://twitter.com/intent/tweet?text=Was%20your%20Facebook%20conversation%20hacked%3F%20%23FBexposed">
      Tweet</a>
      <iframe style="border:none;overflow:hidden"
            src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Ffbexposed.com%2Fdocs%2Fplugins%2F&layout=button&size=small&mobile_iframe=true&width=59&height=20&appId"
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


