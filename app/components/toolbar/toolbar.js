var ToolbarMenu = function(container) {
  this.container = container;
  this.button = container.find('.jui-toolbar__menu-button');
  this.menu = container.find('.jui-toolbar__menu-content');
  this.button.on('click', $.proxy(this, 'onButtonClick'));
  $(document).on('click', $.proxy(this, 'onDocumentClick'));
};

ToolbarMenu.prototype.onDocumentClick = function(e) {
	if(!$.contains(this.container[0], e.target)) {
	  this.menu.addClass('js-hidden');
    this.button.attr('aria-expanded', 'false');
  }
};

ToolbarMenu.prototype.onButtonClick = function() {
  if(this.menu.hasClass('js-hidden')) {
    this.menu.removeClass('js-hidden');
    this.button.attr('aria-expanded', 'true');
  } else {
    this.menu.addClass('js-hidden');
    this.button.attr('aria-expanded', 'false');
  }
};

var Toolbar = function() {
  this.container = $('.jui-toolbar');
  this.menuContainers = this.container.find('.jui-toolbar__menu');
  this.setupMenus();
  this.items = $('.jui-cf__files');
  this.comments = $('.jui-cf__document-comments');
  this.commentsButton = this.container.find('.jui-toolbar__menu-item--show-comments');
  this.rotateButton = this.container.find('.jui-toolbar__menu-item--show-rotate-controls');
  this.itemsButton = this.container.find('.jui-toolbar__button--items');
  this.itemsButton.on('click', $.proxy(this, 'onButtonItemsClick'));
  this.commentsButton.on('click', $.proxy(this, 'onShowCommentsButtonClick'));
  this.rotateButton.on('click', $.proxy(this, 'onShowRotateButtonClick'));
  this.showComments();
  this.hideItems();
};

Toolbar.prototype.setupMenus = function() {
  this.menuContainers.each($.proxy(function(index, el){
    new ToolbarMenu($(el));
  }, this));
};

Toolbar.prototype.onShowCommentsButtonClick = function(e) {
  if(this.commentsButton.attr('aria-pressed') === 'true') {
    this.hideComments();
    this.showItems();
  } else {
    this.showComments();
    this.hideItems();
  }
  this.commentsButton.parents('.jui-toolbar__menu-content').addClass('js-hidden');
  this.commentsButton.parents('.jui-toolbar__menu').find('.jui-toolbar__menu-button').attr('aria-expanded', 'false');
};

Toolbar.prototype.onButtonItemsClick = function(e) {
  if(this.itemsButton.attr('aria-pressed') === 'true') {
    this.hideItems();
    this.showComments();
  } else {
    this.hidewComments();
    this.showItems();
  }
};

Toolbar.prototype.hideComments = function() {
  $('.jui-cf').removeClass('jui-cf--show-comments');
  this.comments.hide();
  this.commentsButton.attr('aria-pressed', 'false');
};


Toolbar.prototype.hideItems = function() {
  this.items.hide();
  this.itemsButton.attr('aria-pressed', 'false');
};


Toolbar.prototype.showComments = function() {
  $('.jui-cf').addClass('jui-cf--show-comments');
  this.comments.show();
  this.commentsButton.attr('aria-pressed', 'true');
};


Toolbar.prototype.showItems = function() {
  this.items.show();
  this.itemsButton.attr('aria-pressed', 'true');
};


Toolbar.prototype.onButtonItemsClick = function(e) {
  this.showItems();
  this.hideComments();
};


Toolbar.prototype.onButtonCommentsClick = function(e) {
  this.showComments();
  this.hideItems();
};

Toolbar.prototype.onShowRotateButtonClick = function(e) {
  if(this.rotateButton.attr('aria-pressed') === 'true') {
    this.hideRotateControls();
  } else {
    this.showRotateControls();
  }
  this.rotateButton.parents('.jui-toolbar__menu-content').addClass('js-hidden');
  this.rotateButton.parents('.jui-toolbar__menu').find('.jui-toolbar__menu-button').attr('aria-expanded', 'false');
};

Toolbar.prototype.showRotateControls = function() {
  this.rotateButton.attr('aria-pressed', 'true');
  $('.jui-cf').addClass('jui-cf--show-rotate-controls');
};

Toolbar.prototype.hideRotateControls = function() {
  this.rotateButton.attr('aria-pressed', 'false');
  $('.jui-cf').removeClass('jui-cf--show-rotate-controls');
};