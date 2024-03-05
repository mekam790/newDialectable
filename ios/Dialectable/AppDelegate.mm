#import "AppDelegate.h"
#import <Firebase.h>
#import <GoogleSignIn/GoogleSignIn.h>

#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [FIRApp configure];
  NSString *clientID = [FIRApp defaultApp].options.clientID;
  GIDConfiguration *configuration = [[GIDConfiguration alloc] initWithClientID:clientID];
  [GIDSignIn sharedInstance].configuration = configuration;
  self.moduleName = @"Dialectable";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (BOOL)application:(nonnull UIApplication *)application
            openURL:(nonnull NSURL *)url
            options:(nonnull NSDictionary<NSString *, id> *)options {
  return [[GIDSignIn sharedInstance] handleURL:url];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self getBundleURL];
}

- (NSURL *)getBundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
