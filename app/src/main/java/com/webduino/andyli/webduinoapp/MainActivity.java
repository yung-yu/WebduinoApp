package com.webduino.andyli.webduinoapp;

import android.app.Activity;
import android.content.res.AssetManager;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;

import com.evgenii.jsevaluator.JsEvaluator;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

/**
 * Created by andyli on 2016/2/20.
 */
public class MainActivity extends Activity {
    WebView webView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        webView = (WebView) findViewById(R.id.webView);
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webView.loadUrl("file:///android_asset/web.html");

    }

    @Override
    protected void onResume() {
        super.onResume();
    }

    @Override
    protected void onPause() {
        super.onPause();
    }

   public String convertInputStreamToString(InputStream inputStream) {
       try {
           BufferedReader r = new BufferedReader(new InputStreamReader(inputStream));
           StringBuilder total = new StringBuilder();
           String line;
           while ((line = r.readLine()) != null) {
               total.append(line);
           }
           return total.toString();
       } catch (IOException e) {
           e.printStackTrace();
       }
       return "";
   }
}
