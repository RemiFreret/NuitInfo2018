package com.nuitdelinfo.tl_assistance;

import android.util.Log;

import java.io.BufferedOutputStream;
import java.io.IOException;
import java.net.Socket;
import java.util.Observable;
import java.util.Observer;

public class ObservCapt implements Observer {

    private Socket socket;

    private BufferedOutputStream outputStream;

    public ObservCapt(){

        Log.i("test","test");

        try {
            socket = new Socket("localhost",300);
            outputStream = new BufferedOutputStream(socket.getOutputStream());
        } catch (IOException e) {
            e.printStackTrace();
        }

        if(outputStream!=null){

        }
    }

    @Override
    public void update(Observable observable, Object o) {
        Log.i("ObservCapt","test from observer");
    }
}
