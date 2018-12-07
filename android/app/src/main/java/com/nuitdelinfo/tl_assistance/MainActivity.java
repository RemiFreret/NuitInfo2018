package com.nuitdelinfo.tl_assistance;

import android.app.Activity;
import android.app.Notification;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.ServiceConnection;
import android.os.Bundle;
import android.os.IBinder;
import android.support.v4.app.NotificationCompat;
import android.util.Log;

public class MainActivity extends Activity {


    private String tag = "MainActivity";
    //mixer / player
    //private Mixer mixer;
    private Intent intent;

    private MainService service = null;

    private ServiceConnection serviceConnection;


    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        invalidateOptionsMenu();


        //              ------service------

        serviceConnection = new ServiceConnection() {
            @Override
            public void onServiceConnected(ComponentName name, IBinder serv) {
                MainService.MonBinder monBinder = (MainService.MonBinder) serv;
                MainActivity.this.service = monBinder.getService();
                Log.i("main","service init");
                PendingIntent pendingIntent = PendingIntent.getActivity(service.getContext(),0,intent,0);
                //notifify
                Notification notification = new NotificationCompat.Builder(service.getContext()).
                        setSmallIcon(R.mipmap.ic_launcher).
                        setContentText("Service").
                        setContentIntent(pendingIntent).build();
                service.startForeground(1337,notification);
            }

            @Override
            public void onServiceDisconnected(ComponentName name) {
                service = null;
            }
        };
        //init service
        intent = new Intent(MainActivity.this,MainService.class);
        startService(intent);
        bindService(intent,serviceConnection, Context.BIND_AUTO_CREATE);

    }


    @Override
    protected void onStart() {
        super.onStart();
    }



    @Override
    protected void onResume() {
        super.onResume();
        bindService(intent,serviceConnection, Context.BIND_AUTO_CREATE);
        Log.i("main","service reconnection");
    }



    @Override
    protected void onPause() {
        unbindService(serviceConnection);
        Log.i("main","service deconnection");
        super.onPause();
    }


    @Override
    protected void onStop() {
        //serviceSimplePlayer.stopSelf();
        super.onStop();
    }


    @Override
    protected void onDestroy() {
        bindService(intent,serviceConnection, Context.BIND_AUTO_CREATE);
        service.stopSelf();
        service.onDestroy();
        Log.i("main","service destruction");
        unbindService(serviceConnection);
        super.onDestroy();
    }

}