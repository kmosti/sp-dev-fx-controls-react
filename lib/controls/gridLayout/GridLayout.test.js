"use strict";
/// <reference types="sinon" />
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var chai_1 = require("chai");
var enzyme_1 = require("enzyme");
var GridLayout_1 = require("./GridLayout");
var DocumentCard_1 = require("office-ui-fabric-react/lib/DocumentCard");
var Image_1 = require("office-ui-fabric-react/lib/Image");
describe('<GridLayout />', function () {
    var gridLayout;
    var dummyItems = [{
            thumbnail: "https://pixabay.com/get/57e9dd474952a414f1dc8460825668204022dfe05555754d742e7bd6/hot-air-balloons-1984308_640.jpg",
            title: "Adventures in SPFx",
            name: "Perry Losselyong",
            profileImageSrc: "https://robohash.org/blanditiisadlabore.png?size=50x50&set=set1",
            location: "SharePoint",
            activity: "3/13/2019"
        }, {
            thumbnail: "https://pixabay.com/get/55e8d5474a52ad14f1dc8460825668204022dfe05555754d742d79d0/autumn-3804001_640.jpg",
            title: "The Wild, Untold Story of SharePoint!",
            name: "Ebonee Gallyhaock",
            profileImageSrc: "https://robohash.org/delectusetcorporis.bmp?size=50x50&set=set1",
            location: "SharePoint",
            activity: "6/29/2019"
        }, {
            thumbnail: "https://pixabay.com/get/57e8dd454c50ac14f1dc8460825668204022dfe05555754d742c72d7/log-cabin-1886620_640.jpg",
            title: "Low Code Solutions: PowerApps",
            name: "Seward Keith",
            profileImageSrc: "https://robohash.org/asperioresautquasi.jpg?size=50x50&set=set1",
            location: "PowerApps",
            activity: "12/31/2018"
        }, {
            thumbnail: "https://pixabay.com/get/55e3d445495aa514f1dc8460825668204022dfe05555754d742b7dd5/portrait-3316389_640.jpg",
            title: "Not Your Grandpa's SharePoint",
            name: "Sharona Selkirk",
            profileImageSrc: "https://robohash.org/velnammolestiae.png?size=50x50&set=set1",
            location: "SharePoint",
            activity: "11/20/2018"
        }, {
            thumbnail: "https://pixabay.com/get/57e6dd474352ae14f1dc8460825668204022dfe05555754d742a7ed1/faucet-1684902_640.jpg",
            title: "Get with the Flow",
            name: "Boyce Batstone",
            profileImageSrc: "https://robohash.org/nulladistinctiomollitia.jpg?size=50x50&set=set1",
            location: "Flow",
            activity: "5/26/2019"
        }];
    var dummyOnClick = sinon.spy(function (evt) { });
    var dummyOnRenderGridItem = function (item, _finalSize, isCompact) {
        var previewProps = {
            previewImages: [
                {
                    previewImageSrc: item.thumbnail,
                    imageFit: Image_1.ImageFit.cover,
                    height: 130
                }
            ]
        };
        return React.createElement("div", { "data-is-focusable": true, role: "listitem", "aria-label": item.title },
            React.createElement(DocumentCard_1.DocumentCard, { type: isCompact ? DocumentCard_1.DocumentCardType.compact : DocumentCard_1.DocumentCardType.normal, onClick: function (ev) { return alert("You clicked on a grid item"); } },
                React.createElement(DocumentCard_1.DocumentCardPreview, __assign({}, previewProps)),
                !isCompact && React.createElement(DocumentCard_1.DocumentCardLocation, { location: item.location }),
                React.createElement("div", null,
                    React.createElement(DocumentCard_1.DocumentCardTitle, { title: item.title, shouldTruncate: true }),
                    React.createElement(DocumentCard_1.DocumentCardActivity, { activity: item.activity, people: [{ name: item.name, profileImageSrc: item.profileImageSrc }] }))));
    };
    afterEach(function () {
        gridLayout.unmount();
    });
    it('Test grid layout', function (done) {
        gridLayout = enzyme_1.mount(React.createElement(GridLayout_1.GridLayout, { items: dummyItems, onRenderGridItem: function (item, finalSize, isCompact) { return dummyOnRenderGridItem(item, finalSize, isCompact); } }));
        chai_1.expect(gridLayout.find('.ms-List-surface')).to.have.length(1);
        done();
    });
});

//# sourceMappingURL=GridLayout.test.js.map
