# jQuery rsCheckbox plugin

Replace checkboxes with stars (or any image)

[Demo](http://andersanmiguel.github.com/rs-checkbox)

## How it works

Load jquery, load the plugin and call it, **r**eally **s**imple

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script src="jquery.rs-checkbox.js"></script>
    <script>
    $('input[type="checkbox"]').rsCheckbox();
    </script>

### Options

    {
        element : 'span', // Element to insert
        classNorm : 'favorites', // Class applied to element
        classHigh : 'selected', // Class applied when checked
        hideCheck : true // Show or not the real checkbox
    }
