Pod::Spec.new do |s|
  s.name = 'BackpackTokens'
  s.version = '1.0.0'
  s.summary = ''
  s.description = <<-DESC
                  Description goes here.
                  DESC
  s.homepage = 'https://backpack-tokens.now.sh'
  s.license = { :type => 'ISC' }
  s.source = { :git => 'git@github.com:showbie/backpack-tokens.git', :tag => s.version.to_s }
  s.ios.deployment_target = '10.0'
  s.source_files = 'dist/showbie-color.swift'
  s.swift_version = '4.2'
end
