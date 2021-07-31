
function resnav() {


  if (document.getElementById('resnav').classList.contains('main1')) {
    // console.log(document.getElementById('resnav').classList)
    document.getElementById('resnav').classList.add('main2');
    document.getElementById('resnav').classList.remove('main1')
  }
  else {
    document.getElementById('resnav').classList.add('main1');
    document.getElementById('resnav').classList.remove('main2')

  }
};