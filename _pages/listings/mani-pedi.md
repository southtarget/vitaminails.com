---
layout: page
title: Información sobre Manicura y Pedicura
permalink: /manicura-y-pedicura/
---

# Manicuria y Pedicuria #

<div class="posts">
    <div class="row">
        {% for post in site.categories.ManiPedi %}
          {% if post.url %}
          {% include post-card.html %}
          {% endif %}
        {% endfor %}
    </div>
    {% include pagination.html %}
</div>