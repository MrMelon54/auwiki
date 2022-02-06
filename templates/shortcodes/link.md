{%- set linkmap = load_data(path="data/linkmap.toml") -%}
{%- if linkmap[to] -%}
[{{to}}](@{{linkmap[to]}})
{%- else -%}
{{ throw(message="Could not find an article with title " ~ to ~ " to link to") }}
{%- endif -%}
