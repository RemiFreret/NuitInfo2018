package com.nuitdelinfo.tl_assistance;

import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.os.Binder;
import android.os.IBinder;
import android.support.annotation.Nullable;
import android.util.Log;

import java.util.Timer;
import java.util.TimerTask;


public class MainService extends Service{

    private static final String tag = "mixer";

    //connection
    private final IBinder mBinder = new MainService.MonBinder();
    //private Interface actualisation;
    public static final String BROADCAST_ACTION = "com.nouvel.skipmix.displayevent";
    Intent intent;

    private Thread mainThreadService; // thread du service


    public class MonBinder extends Binder {
        MainService getService(){
            return MainService.this;
        }
    }


    @Override
    public void onCreate() {
        super.onCreate();


        mainThreadService = new Thread(new Runnable() {
            @Override
            public void run() {

                final HttpURLConnect httpURLConnect = new HttpURLConnect();

                //tache qui se lance a intervaux réguliers
                TimerTask timerTask = new TimerTask() {
                    @Override
                    public void run() {
                        try {
                            //envoi des informations avec des post
                            httpURLConnect.sendPost("Oxygene","oxy",99);
                            httpURLConnect.sendPost("Cardio","bpm",60);
                            httpURLConnect.sendPost("Temperature","temp",30);
                            httpURLConnect.sendPost("Acceleration","acc",30);
                            httpURLConnect.sendPost("Hydro","hyd",80);
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                };

                Timer timer = new Timer();
                timer.scheduleAtFixedRate(timerTask,0,1000);//toutes les 1 s

            }
        });
        mainThreadService.start();
        intent = new Intent(BROADCAST_ACTION);
    }


    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        Log.i("service","lancement");
        return super.onStartCommand(intent, flags, startId);
    }

    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return mBinder;
    }


    public Context getContext(){
        return MainService.this;
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
    }
}