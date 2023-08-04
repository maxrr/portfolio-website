<script lang='ts'>
    export let syntaxLang: string = '';
</script>

<head>
    <link rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css">
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
</head>

<div style='margin: 0px; padding: 0px; text-align: left;'>
    <pre style='margin: 0px; padding: 0px; white-space: normal;'>
        <code class={syntaxLang} style='margin: 0px; padding: 1em; white-space: normal;'>
            <slot></slot>
        </code>
    </pre>
    <script>
        hljs.highlightAll();
    </script>
</div>