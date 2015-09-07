import Backbone from 'backbone';
import App from '../app';
import moment from 'moment';

var Journey = Backbone.Model.extend({
    parse: function (data) {
        data.text =  data.origin +' to ' + data.destination;
        return data;
    }
});

var Stop = Backbone.Model.extend({
   parse: function (data) {
       data.platform = data.platform ? data.platform : '-';
       data.isLate = (data.scheduled !== data.expected);

       if (data.isLate) {
           var scheduled = moment(data.scheduled, 'HH:mm');
           var expected = moment(data.expected, 'HH:mm');
           data.lateness = expected.diff(scheduled, 'minutes') + ' minutes late';
       } else {
           data.lateness = 'On time';
       }
       return data;
   }
});

var StopCollection = Backbone.Collection.extend({
    model: Stop,
    parse: function (data) {
        data[0].first = true;
        data[data.length - 1].last = true;
        return data;
    }
});

App.reqres.setHandler('new:journey:entities', function (data) {
    return new Journey(data.journey, {parse: true});
});

App.reqres.setHandler('new:callingPoints:entities', function (data) {
    return new StopCollection(data.callingPoints, {parse: true});
});

export {Journey, Stop, StopCollection};
