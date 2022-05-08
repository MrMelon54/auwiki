{%- set linkmap = load_data(path="data/linkmap.toml") -%}
{%- if linkmap[to] -%}
[{%- if label -%}{{ label }}{%- else -%}{{to | replace(from = "--", to = ".")}}{%- endif -%}](@{{linkmap[to]}}{% if anchor %}#{{anchor}}{% endif %})
{%- else -%}
{{ throw(message="Could not find an article with title " ~ to ~ " to link to") }}
{%- endif -%}
