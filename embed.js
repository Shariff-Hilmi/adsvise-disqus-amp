<div id="disqus_thread"></div>
<script>
window.addEventListener('message', receiveMessage, false);
function receiveMessage(event)
{
    if (event.data) {
        var msg;
        try {
            msg = JSON.parse(event.data);
        } catch (err) {
            // Do nothing
        }
        if (!msg)
            return false;

        if (msg.name === 'resize' || msg.name === 'rendered') {
            window.parent.postMessage({
              sentinel: 'amp',
              type: 'embed-size',
              height: msg.data.height
            }, '*');
        }
    }
}
</script>
<script>
    /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
     */
    var disqus_config = function () {
        var params = new URLSearchParams(window.location.search);
        this.page.identifier = params.get("id");
        this.page.url = params.get("url");
        this.page.title = params.get("title");
    };
    (function() {  // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');

        s.src = 'https://adsvise-1.disqus.com/embed.js';

        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
</script>
