

const url = 'https://public.tableau.com/views/RegionalSampleWorkbook/Storms';

const o = new tableau.Viz(document.querySelector('.one'), url,{
    hideTabs: true,
    onFirstInteractive: function () {
        document.querySelector('.one-status').textContent = 'One Ready';
        document.querySelector('[onclick="showOne()"]').disabled = false;
    }
});

const t = new tableau.Viz(document.querySelector('.two'), url, {
    hideTabs: true,
    onFirstInteractive: function () {
        document.querySelector('.two-status').textContent = 'Two Ready';
        document.querySelector('[onclick="showTwo()"]').disabled = false;
    }
});
