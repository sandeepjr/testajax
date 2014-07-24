/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
/*
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
*/
        console.log('Received Event: ' + id);
    }
};

function befooreajx() {
    $.support.cors=true;
    $.mobile.allowCrossDomainPages=true;
}

function goAjax() {
    befooreajx();
    var url = "https://getVesselTracker.com/seafarer_dev/get_sf_emp_details.php?empid=141600";
    $.ajax({
        url: url,
        datatype: 'text',
        beforeSend: function() {
        },

        success : function(data) {
            if(data[0] != null) {
                alert(data[0]['sur_name']);
            }
        },

        error: function (request, status, error) {
            alert("request:"+request);
            alert("status:"+status);
            alert("error:"+error);
        }
    });
}

function goText() {
    befooreajx();
    var url = "https://getVesselTracker.com/testajax.txt";
    $.ajax({
        url: url,
        datatype: 'text',
        beforeSend: function() {
        },

        success : function(data) {
            alert(data)
        },

        error: function (request, status, error) {
            alert("request:"+request);
            alert("status:"+status);
            alert("error:"+error);
        }
    });
}

function goGoogle() {
    befooreajx();
    var url = "https://www.google.co.in/";
    $.ajax({
        url: url,
        datatype: 'text',
        beforeSend: function() {
        },

        success : function(data) {
            alert(data)
        },

        error: function (request, status, error) {
            alert("request:"+request);
            alert("status:"+status);
            alert("error:"+error);
        }
    });
}

window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}
