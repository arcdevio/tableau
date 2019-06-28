
const url = 'https://public.tableau.com/views/RegionalSampleWorkbook/Storms';

const vizOne = new tableau.Viz(document.querySelector('.one'), url, {
    hideTabs: true,
    onFirstInteractive: function () {
        document.querySelector('.one-status').textContent = 'One Ready';
        document.querySelector('[onclick="showOne()"]').disabled = false;
    }
});

const vizTwo = new tableau.Viz(document.querySelector('.two'), url, {
    hideTabs: true,
    onFirstInteractive: function () {
        document.querySelector('.two-status').textContent = 'Two Ready';
        document.querySelector('[onclick="showTwo()"]').disabled = false;
    }
});

const showOne = function () {
    document.querySelector('.status').textContent = 'Showing ONE Iframe';
    document.querySelector('.one').classList.add('active');
    document.querySelector('.two').classList.remove('active');
};

const showTwo = function () {
    document.querySelector('.status').textContent = 'Showing TWO Iframe';
    document.querySelector('.two').classList.add('active');
    document.querySelector('.one').classList.remove('active');
};
