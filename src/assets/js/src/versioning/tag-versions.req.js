(function () {
    const versionsJson = $('body').data('api-versions-json');
    const defaultUrl = $('body').data('default-url');
    $.ajax({
        url: versionsJson,
        type: "get",
        contentType: 'application/json',
        xhrFields: {
            withCredentials: false
        }
    }).done(function (data) {
        let folders = data.folders;
        const select = $('#versions');

        folders = folders.reverse();
        folders.forEach(function (f) {
            const versionUrl = defaultUrl.replace("typescript/latest'", f + "/typescript")
            select.append($('<option>', {
                value: versionUrl,
                text: f
            }));
        });

        const version = folders.filter(function(v){ return window.location.href.indexOf(v) >= 0;})[0];
        if (version) {
            select.val(versionUrl);
        } else {
            select.val(versionUrl);
        }
    });

    $('#versions').on('change', function () {
        const val = $('#versions').val();
        window.location.assign(val);
    });
})();
